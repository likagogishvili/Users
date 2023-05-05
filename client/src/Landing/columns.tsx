import "./landing.scss";
import useStore from "../store/store";
import { Button } from "antd";

function DeleteButton(props: { recordKey: number }) {
  const { setDeletedItem } = useStore();
  return (
    <Button
      danger
      onClick={() => {
        setDeletedItem(props.recordKey);
      }}
    >
      Delete
    </Button>
  );
}

const columns = [
  {
    id: "index",
    title: "Index",
    dataIndex: "index",
    key: "index",
  },
  {
    id: "id",
    title: "user_id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "street",
    dataIndex: ["address", "street"],
    key: "street",
  },
  {
    title: "city",
    dataIndex: ["address", "city"],
    key: "city",
  },
  {
    title: "phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: (record: any) => <DeleteButton recordKey={record.key} />,
  },
];

export { columns };
