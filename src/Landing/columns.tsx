import "./landing.scss";
import Button from "@mui/material/Button";
import useStore from "../store/store";

function DeleteButton(props: { recordKey: number }) {
  const { setDeletedItem } = useStore();
  return (
    <Button
      className={`delete`}
      variant="outlined"
      color="error"
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
    id: "id",
    title: "id",
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
