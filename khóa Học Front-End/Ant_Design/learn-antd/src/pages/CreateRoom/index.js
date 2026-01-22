import { Button, Form, Input, InputNumber, Select, Switch } from "antd";
import { createRoom } from "../../service/roomsService";
const { Option } = Select;

function CreateRoom() {
    const [form] = Form.useForm();
    const handleSubmit = async (values) => {
        const request = await createRoom(values);
        request ? alert("Thêm phòng thành công!") : alert("Thêm phòng thất bại!");
        form.resetFields();
    }
    const rule =
        [{
            required: true,
            message: 'require!'
        }];
    return (
        <>
            <h2>Thêm phòng mới</h2>
            <Form layout="vertical" name="create-room" onFinish={handleSubmit} form={form}>
                <Form.Item
                    label="Trạng thái"
                    name="status"
                    valuePropName="checked"

                >
                    <Switch checkedChildren = "Còn Phòng" unCheckedChildren ="Hết phòng"/>
                </Form.Item>

                <Form.Item
                    label="Loại phòng"
                    name="typeRoom"
                    valuePropName="checked"

                >
                    <Switch checkedChildren="VIP" unCheckedChildren="Nomarl"/>
                </Form.Item>

                <Form.Item
                    label="Tên phòng"
                    name="name"
                    rules={rule}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Số lượng giường"
                    name="quantityBed"
                    rules={rule}
                >
                    <InputNumber min={1} />
                </Form.Item>
                <Form.Item
                    label="Số người tối đa"
                    name="quantityPeople"
                    rules={rule}
                >
                    <InputNumber min={1} />
                </Form.Item>

                <Form.Item name="utils" label="Tiện ích">
                    <Select style={{ width: "100%" }} defaultActiveFirstOption={"Wifi"} mode="multiple" allowClear>
                        <Option value={"Wifi"}>Wifi</Option>
                        <Option value={"Nóng lạnh"}>Nóng lạnh</Option>
                        <Option value={"Điều hòa"}>Điều hòa</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Mô tả"
                    name="description"

                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Tạo mới
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default CreateRoom