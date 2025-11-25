import { useEffect, useState } from "react"

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
            <ul>
                {post.map(item => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}

            </ul>
        </>
    )
}
export default BlogAll