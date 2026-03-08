// useState giúp cập nhật lại giao diện khi dữ liệu thay đổi
import { useState } from "react";
import "./modal.scss"
function Modal() {

    const [showModal, setShowModal] = useState(true);
    const handleShowModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <>

            <button onClick={handleShowModal}>Click</button>
            {showModal && (   //nếu showModal == true thì render ra bên trong;
                <div className="modal">
                    <div className="modal__body">
                        <button className="modal__close" onClick={handleCloseModal}>
                            X
                        </button>
                        <div className="modal__content">
                            Nội dung...
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
export default Modal;