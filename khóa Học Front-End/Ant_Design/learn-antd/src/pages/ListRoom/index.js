import { useEffect, useState } from "react";
import { getListRoom } from "../../service/roomsService";
import {Button } from 'antd';
import {TableOutlined, UnorderedListOutlined} from '@ant-design/icons';
import RoomGrid from "./RoomGrid";
import RoomTable from "./RoomTable";
function ListRoom() {
    const [rooms, setRooms] = useState([]);
    const [isGrid, setIsGrid] = useState(true)
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListRoom();
            setRooms(response)
        }
        fetchApi();
    }, [])
    console.log(rooms);
    return (
        <>
            <Button onClick={() => setIsGrid(!isGrid)}>
                {isGrid ? <UnorderedListOutlined /> :  <TableOutlined />}
            </Button>
            {isGrid
                ?
                (<>
                    <RoomGrid rooms = {rooms}/>
                </>)
                :
                (<>
                
                    <RoomTable rooms = {rooms}/>
                </>)}

        </>
    )
}
export default ListRoom;