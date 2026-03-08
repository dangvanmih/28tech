import { useEffect, useState } from "react";
import { getListRoom } from "../../service/roomsService";
import { Button } from 'antd';
import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons';
import RoomGrid from "./RoomGrid";
import RoomTable from "./RoomTable";
function ListRoom() {
    const [rooms, setRooms] = useState([]);
    const [isGrid, setIsGrid] = useState(true)
    const fetchApi = async () => {
        const response = await getListRoom();
        setRooms(response.reverse()) // reverse để fill data mới sẽ hiển thị lên trên.
    }
    useEffect(() => {
        fetchApi();
    }, [])
    const handeReload = () => {
        fetchApi();
    }
    return (
        <>
            <Button onClick={() => setIsGrid(!isGrid)}>
                <UnorderedListOutlined />
            </Button>
            <Button onClick={() => setIsGrid(!isGrid)}>
                <TableOutlined />
            </Button>
            {isGrid
                ?
                (<>
                    <RoomGrid rooms={rooms} />
                </>)
                :
                (<>

                    <RoomTable rooms={rooms} onReload={handeReload} />
                </>)}

        </>
    )
}
export default ListRoom;
