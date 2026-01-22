import { useEffect, useState } from "react";
import { getListRoom } from "../../service/roomsService";
import { Card, Row, Col, Badge } from 'antd';
function ListRoom() {
    const [rooms, setRooms] = useState([]);

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
            <Row gutter={[20, 20]}>
                {rooms.map(item => (

                    <Col span={12} key={item.id}>
                        <Badge.Ribbon text={item.typeRoom ? "VIP" : "Thường"} color={item.typeRoom ? "purple" : "green"}>
                        <Card title={item.name}>
                            <p>Số giường: <strong>{item.quantityBed}</strong></p>
                            <p>Số người: <strong>{item.quantityPeople}</strong></p>
                            <p><strong>
                                {
                                    item.status
                                        ?
                                        <Badge status="success" text="Còn phòng" />
                                        :
                                        <Badge status="error" text="Hết phòng" />
                                }
                            </strong></p>
                        </Card >
                        </Badge.Ribbon>
                    </Col>
                   
                ))}
        </Row >
        </>
    )
}
export default ListRoom;