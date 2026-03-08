import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function BlogAll() {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/post")
            .then(res => res.json())
            .then(data => {

                setPost(data.posts)
            })
    }, [])
    console.log(post);

    return (
        <>
            <h1>Trang Tin Tức</h1>
            <ul>
                {post.map(item => (
                    <li key={item.id}>
                        <Link to={"/blog/" + item.id}>
                            {item.title}
                        </Link>
                    </li>
                ))}

            </ul>
        </>
    )
}
export default BlogAll
