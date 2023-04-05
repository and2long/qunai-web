import { Button, Form, Input, Select, message } from "antd";
import { ReactElement } from "react";
import { Department } from "../interfaces/department";
import { useCreateAppointmentEffect } from "../presenters/use-create-appointment-effect";

const { Option } = Select;

export const CreateAppointmentScreen = (): ReactElement => {
  const [messageApi, contextHolder] = message.useMessage();

  const { departments, creataAppointment } = useCreateAppointmentEffect();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    // TODO replace creatorId.
    await creataAppointment({ creatorId: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed", title: values.title, introduction: values.introduction });
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
          label="Title"
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
          label="Introduction"
          rules={[
            {
              required: true,
              message: "Please input your Introduction!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="department" label="Department" rules={[{ required: true }]}>
          <Select
            placeholder="Select a department"
            allowClear
          >
            {
              departments.map((item: Department) => <Option value={item.id}>{item.name}</Option>)
            }
          </Select>
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
