import { useEffect, useState } from "react";
import useStore from "../store/store";
import axios from "axios";
import { Table } from "antd";
import { columns } from "./columns";
import "./landing.scss";
import AddNewUser from "./addNewUser/addNewUser";
import UpdateUser from "./UpdateUser/UpdateUser";

function LandingPage() {
  const { users, setUsers, deletedItem } = useStore();
  let usersURl = "http://localhost:3001/users";
  const [updateUserData, setUpdateUserData] = useState(false);
  const [clickedcolumn, setClickedColumn] = useState<number>();

  //Get Users Data
  useEffect(() => {
    axios
      .get(usersURl)
      .then((res: any) => {
        const addKeys = res.data.map((element: any, index: number) => ({
          ...element,
          key: element.id,
          index: index + 1,
        }));
        setUsers(addKeys);
      })
      .catch((err: object) => console.log(err));
    // eslint-disable-next-line
  }, [updateUserData]);

  //Delete Clicked User
  useEffect(() => {
    if (deletedItem !== 0) {
      axios
        .post("http://localhost:3001/deleteUser", {
          id: deletedItem,
        })
        .then(function () {
          setUpdateUserData(!updateUserData);
        })
        .catch(function (error: object) {
          console.log(error);
        });
    }
    // eslint-disable-next-line
  }, [deletedItem]);

  //Update Clicked User Data
  function UpdateRecord(clickedColumn: number) {
    if (clickedColumn) {
      setClickedColumn(clickedColumn);
    }
  }
  return (
    <div className="tableDiv">
      <AddNewUser
        setUpdateUserData={setUpdateUserData}
        updateUserData={updateUserData}
      />
      <UpdateUser
        clickedcolumn={clickedcolumn}
        setUpdateUserData={setUpdateUserData}
        updateUserData={updateUserData}
        setClickedColumn={setClickedColumn}
      />
      <Table
        dataSource={users}
        columns={columns}
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              UpdateRecord(record.id);
            },
          };
        }}
      />
    </div>
  );
}

export default LandingPage;
