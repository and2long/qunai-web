import { Button, DatePicker, Form, Input, Select, TimePicker, message } from "antd";
import moment from "moment";
import { ReactElement } from "react";
import { AppointmentCreationPayload } from "../interfaces/appointment";
import { Department } from "../interfaces/department";
import { useCreateAppointmentEffect } from "../presenters/use-create-appointment-effect";

const { Option } = Select;

export const CreateAppointmentScreen = (): ReactElement => {
  const [messageApi, contextHolder] = message.useMessage();
  const { departments, creataAppointment } = useCreateAppointmentEffect();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    const date = moment(values.date.$d).format();
    const nowTime = date.substring(11, 19);
    const startTime = moment(values.time[0].$d).format().substring(11, 19);
    const endTime = moment(values.time[1].$d).format().substring(11, 19);
    const payload: AppointmentCreationPayload = {
      // TODO replace creatorId.
      creatorId: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
      title: values.title,
      introduction: values.introduction,
      departmentIds: [values.department],
      startTime: date.replace(nowTime, startTime),
      endTime: date.replace(nowTime, endTime),
    };
    await creataAppointment(payload);
    messageApi.open({
      type: "success",
      content: "create successfully",
    });
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return (
    <div>
      {contextHolder}
      <Form
        {...formItemLayout}
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          name="title"
          label="标题"
          rules={[
            {
              required: true,
              message: "Please input your Title!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="introduction"
          label="问题描述"
          rules={[
            {
              required: true,
              message: "Please input your Introduction!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="department" label="主要科室" rules={[{ required: true }]}>
          <Select
            placeholder="请选择一个科室"
            allowClear
          >
            {
              departments.map((item: Department) => <Option key={item.id} value={item.id}>{item.name}</Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item name="date" label="预约日期" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item name="time" label="预约时间" rules={[{ required: true }]}>
          <TimePicker.RangePicker minuteStep={30} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
