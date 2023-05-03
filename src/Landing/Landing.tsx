import { useEffect } from "react";
import useStore from "../store/store";
import axios from "axios";
import { Table } from "antd";
import { columns } from "./columns";
import "./landing.scss";

function LandingPage() {
  const { users, setUsers, deletedItem } = useStore();
  let usersURl = "http://localhost:5000/";

  useEffect(() => {
    axios
      .get(usersURl)
      .then((res) => {
        const addKeys = res.data.map((element: any, key: number) => ({
          ...element,
          key: element.id,
        }));
        setUsers(addKeys);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(()=>{
    if(deletedItem !== 0 ){
      axios.post('http://localhost:5000/deleteRecord', {
        id: deletedItem,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },[deletedItem])

  return (
    <div className="tableDiv">
      <Table dataSource={users} columns={columns} />
    </div>
  );
}

export default LandingPage;
