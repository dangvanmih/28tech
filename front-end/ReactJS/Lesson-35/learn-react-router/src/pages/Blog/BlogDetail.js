/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import GoBack from "../../components/GoBack";

function BlogDetail() {
    const params = useParams()
    const [post, setPost] = useState()

    useEffect(() => {
        fetch(`https://dummyjson.com/post/${params.id}`)
            .then(res => res.json())
            .then(data => {

                setPost(data)

            })
    }, [])
    // console.log(post);

    return (
        <>
            <GoBack/>
            {post && (
                <>
                    <h1>{post.title}</h1>

                    <div>{post.body}</div>
                </>
            )}


        </>
    )
}
export default BlogDetail