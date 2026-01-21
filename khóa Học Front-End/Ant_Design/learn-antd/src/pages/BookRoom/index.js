import { Button, Checkbox, Col, DatePicker, Input, Radio, Row, Select, Space } from "antd";
import { useState } from "react";
import { bookRoom } from "../../service/bookRoomService";
const { RangePicker } = DatePicker;
function BookRoom() {
    const [data, setData] = useState({
        time: "14 giờ"
    })

    const handleChangeInput = (e) => {
        const object = {
            ...data,
            [e.target.name]: e.target.value
        };
        setData(object)
    }
    const handleChangeCheckBox = (e) => {
        const object = {
            ...data,
            service: e
        }
        setData(object)
    }
    const handleChangeDate = (date, dateString) => {
        const object = {
            ...data,
            date: dateString
        }
        setData(object)

    }
    const handleSubmit = async () => {
        const response = await bookRoom(data)
        response ? alert("Đặt phòng thành công!") : alert("Đặt phòng không thành công!")
    }

    const optiontime = [];
    for( let i = 7 ; i <= 24; i++)
    {
        optiontime.push({
            value: i > 9 ? `${i} giờ` : `0${i} giờ` ,
            label: i > 9 ? `${i} giờ` : `0${i} giờ`,
        })
    }
    const handleChangeSelect = (e) => {
        const object = {
            ...data,
            time: e
        }
        setData(object)
    }
    return (
        <>
            <h2>Đặt phòng</h2>

            <Row gutter={[20, 20]}>
                <Col span={24}>
                    <p>Họ tên</p>
                    <Input name="fullName" placeholder="họ và tên" onChange={handleChangeInput} />
                </Col>
                <Col span={12}>
                    <p>Số điện thoại</p>
                    <Input name="phone" placeholder="họ và tên" onChange={handleChangeInput} />
                </Col>
                <Col span={12}>
                    <p>Email</p>
                    <Input name="email" placeholder="họ và tên" onChange={handleChangeInput} />
                </Col>
                <Col span={12}>
                    <p>Dịch vụ</p>
                    <Checkbox.Group onChange={handleChangeCheckBox}>
                        <Space orientation="vertical">
                            <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
                            <Checkbox value="Thuê ô tô 7 chỗ">Thuê ô tô 7 chỗ</Checkbox>
                            <Checkbox value="Thuê xe điện">Thuê xe điện</Checkbox>
                            <Checkbox value="Thuê cano">Thuê cano</Checkbox>
                            <Checkbox value="Thuê phao bơi">Thuê phao bơi</Checkbox>
                            <Checkbox value="Thuê lều trại">Thuê lều trại</Checkbox>
                        </Space>
                    </Checkbox.Group>
                </Col>
                <Col span={12}>
                    <p>Quà tặng</p>
                    <Radio.Group name="gift" onChange={handleChangeInput}>
                        <Space orientation="vertical">
                            <Radio value="Mũ">Mũ</Radio>
                            <Radio value="Áo phông">Áo phông</Radio>
                            <Radio value="Kem chống nắng">Kem chống nắng</Radio>
                        </Space>
                    </Radio.Group>
                </Col>
                <Col span={12} >
                    <p>
                        Chọn ngày
                    </p>
                    <RangePicker placeholder={["Nhận phòng", "Trả phòng"]} format="DD-MM-YYYY" onChange={handleChangeDate} />
                </Col>

                <Col span={12}>
                    <p>
                        Giờ nhận phòng
                    </p>
                    <Select style={{width: "100%" }} defaultValue={data.time} options = {optiontime} onChange={handleChangeSelect}/>
                </Col>


                <Col span={24}>
                    <Button type="primary" onClick={handleSubmit}>
                        Đặt Phòng
                    </Button>
                </Col>


            </Row>
        </>
    )
}
export default BookRoom;
