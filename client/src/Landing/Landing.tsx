import { useEffect, useState } from "react";
import useStore from "../store/store";
import axios from "axios";
import { Table } from "antd";
import { columns } from "./columns";
import "./landing.scss";
import AddNewUser from "./addNewUser/addNewUser";

function LandingPage() {
  const { users, setUsers, deletedItem } = useStore();
  let usersURl = "http://localhost:5000/users";
  const [updateUserData, setUpdateUserData] = useState(false);
  useEffect(() => {
    axios
      .get(usersURl)
      .then((res: any) => {
        const addKeys = res.data.map((element: any) => ({
          ...element,
          key: element.id,
        }));
        setUsers(addKeys);
      })
      .catch((err: object) => console.log(err));

    // eslint-disable-next-line
  }, [updateUserData, users]);

  useEffect(() => {
    if (deletedItem !== 0) {
      axios
        .post("http://localhost:5000/deleteRecord", {
          id: deletedItem,
        })
        .then(function (response: any) {
          setUpdateUserData(!updateUserData);
          console.log(response);
        })
        .catch(function (error: object) {
          console.log(error);
        });
    }
    // eslint-disable-next-line
  }, [deletedItem]);

  return (
    <div className="tableDiv">
      <AddNewUser />
      <Table dataSource={users} columns={columns} />
    </div>
  );
}

export default LandingPage;
