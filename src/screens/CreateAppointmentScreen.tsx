import { Button, Form, Input } from "antd";
import { ReactElement } from "react";

export const CreateAppointmentScreen = (): ReactElement => {

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
    <Form
      {...formItemLayout}
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
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};
