function NavigationMenu() {
    const handelClick = (e) => {
        console.log(e.target);
    }

    const handleChange = (e) => {

        console.log(e.target.value);

    }
    const handeFocus = (e) => {
        e.target.classList.add("input--active");
        console.log(e.target);

    }
    const handeBlur = (e) => {
        e.target.classList.remove("input--active");
        console.log(e.target);

    }
    const handeSubmit = (e) => {
        console.log(e);
        
        e.preventDefault(); // ngăn chặn sự kiện mặc định , như ở đây là khi nhấn nút button thì ko bị load lại trang
        console.log(e.target[0].value); // 0 là vị trí input trong target
        
    }
    return (
        <>
            <div className="box">
                <div>NavigationMenu</div>
                <form onSubmit={handeSubmit}>

                    <input className="input" type="text"
                        onChange={handleChange}
                        onFocus={handeFocus}
                        onBlur={handeBlur} />
                    <button onClick={handelClick}>Search</button>


                </form>
            </div>
        </>
    )
}
export default NavigationMenu