import { useEffect, useState } from "react";
import UserModal from "../modal/Modal";
import useStore from "../../store/store";
import axios from "axios";
import { User } from "../../types/types";

function UpdateUser(props: any) {
  const { users } = useStore();

  const [updatedUser, setUser] = useState<User>({
    name: "",
    email: "",
    gender: "",
    address: { street: "", city: "" },
    phone: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (props.clickedcolumn) {
      let clickedUserData = users.filter(
        (user: any) => user.id === props.clickedcolumn
      )[0];
      if (clickedUserData.name) {
        setUser({
          name: clickedUserData.name,
          email: clickedUserData.email,
          gender: clickedUserData.gender,
          address: {
            // @ts-ignore
            street: clickedUserData.address.street,
            // @ts-ignore
            city: clickedUserData.address.city,
          },
          phone: clickedUserData.phone,
        });
      }
      setIsModalOpen(true);
    }
    // eslint-disable-next-line
  }, [props.clickedcolumn]);

  const onFinish = (values: User) => {
    setUser({
      name: values.name,
      email: values.email,
      gender: values.gender,
      // @ts-ignore
      address: { street: values.street, city: values.city },
      phone: values.phone,
    });
    let UpdatedUserForPost = {
      id: props.clickedcolumn,
      name: values.name,
      email: values.email,
      gender: values.gender,
      // @ts-ignore
      address: { street: values.street, city: values.city },
      phone: values.phone,
    };

    axios
      .post("http://localhost:3001/updateUser", {
        newUser: UpdatedUserForPost,
      })
      .then(function () {
        props.setUpdateUserData(!props.updateUserData);
        alert("User Updated");
        setIsModalOpen(false);
      })
      .catch(function (error: object) {
        console.log(error, "err");
      });
  };
  return (
    <UserModal
      onFinish={onFinish}
      newUser={updatedUser}
      setIsModalOpen={setIsModalOpen}
      isModalOpen={isModalOpen}
      header="Update User"
      buttonTitle="Update"
      setUser={setUser}
    />
  );
}
export default UpdateUser;
