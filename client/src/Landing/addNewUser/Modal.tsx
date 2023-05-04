import { useState } from "react";
import "./addNewUser.scss";
import useStore from "../../store/store";

import { Modal, Button, Form, Input, Select } from "antd";

interface User {
  name: string;
  email: string;
  gender: string;
  address: { street: string; city: string };
  phone: string;
}

const UserModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { users } = useStore();

  const [newUser, setNewUser] = useState<User>({
    name: "",
    email: "",
    gender: "",
    address: { street: "", city: "" },
    phone: "",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: User) => {
    console.log(values);
    setNewUser({
      name: values.name,
      email: values.email,
      gender: values.gender,
      // @ts-ignore
      address: { street: values.street, city: values.city },
      phone: values.phone,
    });

    console.log(newUser);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo.errorFields[0]);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add New User
      </Button>
      <Modal
        title="Add New User"
        open={isModalOpen}
        onCancel={handleCancel}
        className="modal"
        footer={null}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: "500px" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input value={newUser.name} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address" },
              {
                validator: (_, value) => {
                  //check If user email already exists
                  const isEmailExists = users.some(
                    (user) => user.email === value
                  );
                  if (isEmailExists) {
                    return Promise.reject("Email already exists");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input value={newUser.email} />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Select value={newUser.gender}>
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Street"
            name="street"
            rules={[{ required: true, message: "Please input street!" }]}
          >
            <Input value={newUser.address.street} />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Please input city!" }]}
          >
            <Input value={newUser.address.city} />
          </Form.Item>

          <Form.Item
            rules={[
              { required: true, message: "Please input your phone number!" },
              //   { pattern: /^[0-9]*$/, message: "Please enter only digits" },
              {
                min: 9,
                max: 9,
                message: "Please enter a valid 9-digit phone number",
              },
            ]}
            name="phone"
            label="Phone"
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserModal;
