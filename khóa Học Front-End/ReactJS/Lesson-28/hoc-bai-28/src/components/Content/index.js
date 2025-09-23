function Content (props) { //Props là một object được truyền vào trong một component, cho phép giao tiếp giữa components với nhau.
                            // hiểu đơn giản là nó truyền data từ component cha xuống component con
    console.log(props.text);
    const {text, number, active} = props;
    return (
        <>
            <div className={"box " + (active ?  "box--active" : "")}>

                {text} - {number}
                
            </div>
        </>
    )
}
export default Content