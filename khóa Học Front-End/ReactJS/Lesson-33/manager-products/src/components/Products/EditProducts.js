import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function EditProduct(props) {
    const {item, onEditReload} = props
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(item);
    const [dataCategory, setDataCatefory] = useState([]);



    useEffect(() => {
        const fecthApi = async () => {
            fetch("http://localhost:3000/categories")
                .then(res => res.json())
                .then(data => {
                    setDataCatefory(data)
                })
        }
        fecthApi()
    }, []);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setData({
            ...data,
            [name]: value
        })
    }
    const openModal = () => {

        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/products/${item.id}`, {
            method: "PATCH",  // phương thức chỉnh sửa sản phẩm
            header: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) // truyền dữ liệu từ fe->be qua API thì trước khi gửi phải convert sang dạng JSON
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setShowModal(false);
                    onEditReload();
                    Swal.fire({
                        position: "center-center",
                        icon: "success",
                        title: "Bạn đã cập nhật sản phẩm thành công!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    return (
        <>

            <button onClick={openModal}>Chỉnh Sửa</button>



            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Tiêu Đề</td>
                                <td>
                                    <input type='text' name='title' onChange={handelChange} value={data.title} required />
                                </td>
                            </tr>
                            {dataCategory.length > 0 && (
                                <tr>
                                    <td>Danh mục</td>
                                    <td>
                                        <select name='category' onChange={handelChange} value={data.category}>
                                            {dataCategory.map((item) => (
                                                <option key={item.id} value={item.title}> {item.title} </option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <td>Giá</td>
                                <td>
                                    <input type='text' name='price' value={data.price} onChange={handelChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Giảm giá</td>
                                <td>
                                    <input type='text' name='discountPercentage' value={data.discountPercentage} onChange={handelChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Số lượng còn lại</td>
                                <td>required
                                    <input type='text' name='stock' value={data.stock} onChange={handelChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Đường dẫn ảnh</td>
                                <td>
                                    <input type='text' name='thumbnail' value={data.thumbnail} onChange={handelChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td>
                                    <textarea rows={4} name='description' value={data.description} onChange={handelChange}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={closeModal}>Hủy</button>
                                </td>
                                <td>
                                    <input type='submit' value="lưu" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>

            </Modal>

        </>
    )
}
export default EditProduct;
