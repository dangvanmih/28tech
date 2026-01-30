import { Table, Tag, Tooltip } from "antd";
import DeleteRoom from "../DeleteRoom";
import EditRoom from "./editRoom";

function RoomTable(props) {
    const { rooms, onReload } = props;
    const columns = [
        {
            title: 'Tên phòng',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Số giường',
            dataIndex: 'quantityBed',
            key: 'quantityBed',
        },
        {
            title: 'Số người',
            dataIndex: 'quantityPeople',
            key: 'quantitypeople',
        },
        {
            title: 'Loại phòng',
            dataIndex: 'typeRoom',
            key: 'typeRoom',
            render: (_, record) => {
                return <>
                    {record.typeRoom ?
                        <>
                            <Tooltip title="Phòng chuẩn 5 sao" color = "purple">
                                <Tag color="purple">
                                    VIP
                                </Tag>
                            </Tooltip>
                            {/* <Badge color="purple" text="Vip" /> */}
                        </>
                        :
                        <>
                            {/* <Badge color="green" text="Thường" /> */}
                            <Tooltip title="Phòng thường chuẩn 3 sao" color = "green">
                                <Tag color="green" >
                                    Thường
                                </Tag>
                            </Tooltip>
                        </>
                    }
                </>;
            }
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => {
                return <>
                    {record.status ? <>
                        <Tooltip title="Phòng chưa có khách đặt" color="green">
                            <Tag color="green">
                                Còn phòng
                            </Tag>
                        </Tooltip>
                        {/* <Badge color="green" text="Còn phòng" /> */}
                    </>
                        :
                        <>
                            {/* <Badge color="red" text="Hết phòng" /> */}
                            <Tooltip title = "Phòng đã có khách đặt" color = "red">
                                <Tag color="red">
                                    Hết phòng
                                </Tag>
                            </Tooltip>
                        </>}
                </>;
            }
        },
        {
            title: 'Hành động',
            key: 'actions',
            render: (_, record) => {
                return (
                    <>
                        <DeleteRoom record={record} onReload={onReload}/>
                        <EditRoom record={record} onReload={onReload}/>
                    </>
                )
            }
        },

    ]
    return (
        <>
            <Table dataSource={rooms} columns={columns} rowKey="id" />
        </>
    )
}
export default RoomTable;
// 1:26