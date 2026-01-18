import { Button, Checkbox, Col, DatePicker, Input, Row, Space } from "antd";
import { useState } from "react";
const { RangePicker } = DatePicker;
function BookRoom() {
    const [data, setData] = useState({})

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
    const handleSubmit = () => {
        console.log("submit to json server", data);
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
                <Col span={12} >
                    <p>
                        Chọn ngày
                    </p>
                    <RangePicker format="DD-MM-YYYY" onChange={handleChangeDate} />
                </Col>
                <Col>
                    <Button type="primary" onClick={handleSubmit}>
                        Đặt Phòng
                    </Button>
                </Col>
            </Row>
        </>
    )
}
export default BookRoom;