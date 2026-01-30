import { Button, Form, Input, InputNumber, Modal, notification, Select, Spin, Switch } from "antd"
import { EditOutlined } from '@ant-design/icons';
import { useState } from "react";
import { updateRoom } from "../../service/roomsService";
const { Option } = Select;
function EditRoom(props) {
    const { record, onReload } = props;
    const [showModal, setShowModal] = useState(false);
    const [form] = Form.useForm();
    const [notiApi, contextHolder] = notification.useNotification(); // hiển messis khi tạo mới phòng
    const [spinning, setSpinning] = useState(false)
    const rule =
        [{
            required: true,
            message: 'require!'
        }];

    const handleShowModal = () => {
        setShowModal(!showModal)
    }
    const handleCancel = () => {
        setShowModal(false)
        form.resetFields()
    }


    const handleSubmit = async (values) => {
        setSpinning(true) // khi submit thì bật spin
        const response = await updateRoom(record.id, values);
        setTimeout(() => {
            if (response) {
                notiApi.success({
                    message: 'Cập nhật phòng thành công!',
                    description: `Bạn đã cập nhật thành công phòng ${record.name}`
                });
                setShowModal(false);
                onReload()

            }
            else {
                notiApi.error({
                    message: 'Cập nhật phòng không thành công!',
                    description: `Bạn đã cập nhật thất bại phòng ${record.name}`
                });
            }
            setSpinning(false) // sau 2s thì spin hết
        }, 2000)
    }
    return (
        <>
            <Button type="primary" icon={<EditOutlined />} onClick={handleShowModal} />

            <Modal open={showModal} onCancel={handleCancel} title="Chỉnh sửa thông tin phòng!" footer={null}>
                {contextHolder}
                <h2>Thêm phòng mới</h2>
                <Spin spinning={spinning} tip="Đang cập nhật...">
                    <Form layout="vertical" name="create-room" onFinish={handleSubmit} form={form} initialValues={record}>
                        <Form.Item
                            label="Trạng thái"
                            name="status"
                            valuePropName="checked"

                        >
                            <Switch checkedChildren="Còn Phòng" unCheckedChildren="Hết phòng" />
                        </Form.Item>

                        <Form.Item
                            label="Loại phòng"
                            name="typeRoom"
                            valuePropName="checked"

                        >
                            <Switch checkedChildren="VIP" unCheckedChildren="Nomarl" />
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

                        <Form.Item name="utils" label="Tiện ích" >
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
                                Cập nhật
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </Modal>
        </>
    )
}
export default EditRoom