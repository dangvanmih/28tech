import { Button, Popconfirm } from "antd"
import { DeleteOutlined } from '@ant-design/icons';
import { deleteRoom } from "../../service/roomsService";
function DeleteRoom(props) {
    const { record, onReload } = props;
    const handleDelete = async () => {
        const response = await deleteRoom(record.id)
        if(response) {
            onReload();
            alert("Xóa thành công!")
        }
        else {
            alert("Xóa không thành công!")
        }
    }
    return (
        <>
            <Popconfirm title="Xác nhận xóa?" onConfirm={() => handleDelete(record.key)}>
                <Button danger icon = {<DeleteOutlined/>} style={{marginRight:"10px"}}  />
            </Popconfirm>
        </>
    )
}
export default DeleteRoom