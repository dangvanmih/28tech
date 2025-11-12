import { useState } from 'react';
import Modal from 'react-modal';


function CreateProduct() {
    const [showModal, setShowModal] = useState(false);
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
     function openModal() {
        setShowModal(true);
     }
    function closeModal() {
    setShowModal(false);
    }
    return (
        <>
        
            <button onClick={openModal}>Tạo sản phẩm mới</button>

            

            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>Tiêu Đề</td>
                                <td>
                                    <input type='text' name='title' />
                                </td>
                            </tr>
                             <tr>
                                <td>Danh mục</td>
                                <td>
                                   <select name='category'>
                                        <option value= "Danh mục 1">Danh mục 1</option>
                                        <option value= "Danh mục 2">Danh mục 2</option>
                                        <option value= "Danh mục 3">Danh mục 3</option>
                                   </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Giá</td>
                                <td>
                                    <input type='text' name='price' />
                                </td>
                            </tr>
                            <tr>
                                <td>Giảm giá</td>
                                <td>
                                    <input type='text' name='title' />
                                </td>
                            </tr>
                            <tr>
                                <td>Số lượng còn lại</td>
                                <td>
                                    <input type='text' name='title' />
                                </td>
                            </tr>
                            <tr>
                                <td>Đường dẫn ảnh</td>
                                <td>
                                    <input type='text' name='title' />
                                </td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td>
                                    <textarea name='description'></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>

            </Modal>
        
        </>
    )
}
export default CreateProduct;
// 38:58