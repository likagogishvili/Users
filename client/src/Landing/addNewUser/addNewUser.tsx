import "./addNewUser.scss";
import { useState } from "react";
import UserModal from "../modal/Modal";
import axios from "axios";
import { Button } from "antd";
import { User } from "../../types/types";

function AddNewUser(props: any) {
  const [newUser, setNewUser] = useState<User>({
    name: "",
    email: "",
    gender: "",
    address: { street: "", city: "" },
    phone: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = (values: User) => {
    setNewUser({
      name: values.name,
      email: values.email,
      gender: values.gender,
      // @ts-ignore
      address: { street: values.street, city: values.city },
      phone: values.phone,
    });
    let newUserForPost = {
      name: values.name,
      email: values.email,
      gender: values.gender,
      // @ts-ignore
      address: { street: values.street, city: values.city },
      phone: values.phone,
    };

    axios
      .post("http://localhost:3001/addUser", {
        newUser: newUserForPost,
      })
      .then(function () {
        props.setUpdateUserData(!props.updateUserData);
        alert("User Added");
        setIsModalOpen(false);
      })
      .catch(function (error: object) {
        console.log(error);
      });
  };
  return (
    <div className="newUserCont">
      <Button type="primary" onClick={showModal}>
        Add New User
      </Button>
      <UserModal
        onFinish={onFinish}
        newUser={newUser}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        header="Add User"
        buttonTitle="Submit"
        setUser={setNewUser}
      />
    </div>
  );
}

export default AddNewUser;
