import { Badge, Table, Tag } from "antd";
import DeleteRoom from "../DeleteRoom";

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
                            <Tag color="purple">
                                VIP
                            </Tag>
                            {/* <Badge color="purple" text="Vip" /> */}
                        </>
                        :
                        <>
                            {/* <Badge color="green" text="Thường" /> */}
                            <Tag color="green">
                                Thường
                            </Tag>
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
                            <Tag color="green">
                                Còn phòng
                            </Tag>
                            {/* <Badge color="green" text="Còn phòng" /> */}
                        </>
                        :
                        <>
                            {/* <Badge color="red" text="Hết phòng" /> */}
                            <Tag color="red">
                                Hết phòng
                            </Tag>
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
                        <DeleteRoom record={record} onReload={onReload} />
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