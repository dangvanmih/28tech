import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function DeleteProduct(props) {
    const { item, onEditReload } = props
    const handleDelete = () => {
        Swal.fire({
            title: "Bạn có chắc muốn xóa sản phẩm không?",
            text: "Nếu bạn xóa bạn sẽ không thể khôi phục lại được!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xóa",
            cancelButtonText: "Hủy"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/products/${item.id}`, {
                    method: "DELETE",  // phương thức Xóa sản phẩm
                })
                    .then(res => res.json())
                    .then(() => {
                        onEditReload()
                        Swal.fire({
                            title: "Đã xóa!",
                            text: "Bạn đã xóa sản phẩm thành công!",
                            icon: "success"
                        });
                    })
            }
        });

    }
    return (
        <>
            <button onClick={handleDelete}>Xóa</button>
        </>
    )
}
export default DeleteProduct;