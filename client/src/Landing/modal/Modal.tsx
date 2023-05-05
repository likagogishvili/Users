import { useEffect } from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import useStore from "../../store/store";

const UserModal = (props: any) => {
  const [form] = Form.useForm();
  const { users } = useStore();

  useEffect(() => {
    // Set the initial form values based on props
    form.setFieldsValue({
      name: props.newUser.name,
      email: props.newUser.email,
      gender: props.newUser.gender,
      street: props.newUser.address.street,
      city: props.newUser.address.city,
      phone: props.newUser.phone,
    });
  }, [form, props.newUser]);

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    // console.log("Success:", values);
    props.onFinish(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title={props.header}
      open={props.isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email address" },

            {
              // @ts-ignore
              validator:
                props.buttonTitle === "Submit"
                  ? (_, value) => {
                      //check If user email already exists
                      const isEmailExists = users.some(
                        (user) => user.email === value
                      );
                      if (isEmailExists) {
                        return Promise.reject("Email already exists");
                      }
                      return Promise.resolve();
                    }
                  : "",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Select>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Street"
          name={"street"}
          rules={[{ required: true, message: "Please input street!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="City"
          name={"city"}
          rules={[{ required: true, message: "Please input city!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="primary" htmlType="submit">
            {props.buttonTitle}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;
