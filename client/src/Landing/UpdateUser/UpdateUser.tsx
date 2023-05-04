import { useEffect, useState } from "react";
import UserModal from "../modal/Modal";
import useStore from "../../store/store";

interface User {
  name: string;
  email: string;
  gender: string;
  address: { street: string; city: string };
  phone: string;
}

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
    if (isModalOpen === false && props.clickedcolumn) {
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
  }, [props.clickedcolumn]);

  const onFinish = (values: User) => {
    console.log("here");
    // setNewUser({
    //   name: values.name,
    //   email: values.email,
    //   gender: values.gender,
    //   // @ts-ignore
    //   address: { street: values.street, city: values.city },
    //   phone: values.phone,
    // });
    // let newUserForPost = {
    //   name: values.name,
    //   email: values.email,
    //   gender: values.gender,
    //   // @ts-ignore
    //   address: { street: values.street, city: values.city },
    //   phone: values.phone,
    // };

    // axios
    //   .post("http://localhost:3001/addUser", {
    //     newUser: newUserForPost,
    //   })
    //   .then(function (response: any) {
    //     props.setUpdateUserData(!props.updateUserData);
    //     alert("User Added");
    //     setIsModalOpen(false);
    //   })
    //   .catch(function (error: object) {
    //     console.log(error);
    //   });
  };
  return (
    <UserModal
      /* @ts-ignore */
      onFinish={onFinish}
      newUser={updatedUser}
      setIsModalOpen={setIsModalOpen}
      isModalOpen={isModalOpen}
      header="Update User"
      buttonTitle="Update"
    />
  );
}
export default UpdateUser;
