import ".././addNewUser/addNewUser.scss";
import useStore from "../../store/store";

import { Modal, Button, Form, Input, Select } from "antd";

const UserModal: React.FC = (props: any) => {
  const { users } = useStore();

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo.errorFields[0]);
  };

  return (
    <>
      <Modal
        title={props.header}
        open={props.isModalOpen}
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
          onFinish={props!.onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              value={props.newUser.name}
              defaultValue={props.newUser.name}
            />
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
            <Input
              value={props.newUser.email}
              defaultValue={props.newUser.email}
            />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Select
              value={props.newUser.gender}
              defaultValue={props.newUser.gender}
            >
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Street"
            name="street"
            rules={[{ required: true, message: "Please input street!" }]}
          >
            <Input
              value={props.newUser.address.street}
              defaultValue={props.newUser.address.street}
            />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Please input city!" }]}
          >
            <Input
              value={props.newUser.address.city}
              defaultValue={props.newUser.address.city}
            />
          </Form.Item>

          <Form.Item
            rules={[
              { required: true, message: "Please input your phone number!" },
              //   { pattern: /^[0-9]*$/, message: "Please enter only digits" },
              // {
              //   min: 9,
              //   max: 9,
              //   message: "Please enter a valid 9-digit phone number",
              // },
            ]}
            name="phone"
            label="Phone"
          >
            <Input
              type="string"
              value={props.newUser.phone}
              defaultValue={props.newUser.phone}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              {props.buttonTitle}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserModal;
