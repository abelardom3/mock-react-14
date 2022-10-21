const PostItem = ({ post, getSingle }) => {

    const handleClick = (id) => {
        getSingle(id)

    }



    return (
        <div onClick={() => { handleClick(post.id) }} className="listItem" id={post.id}>
            <h1 >{post.title}</h1>
            <p>{post.id}</p>
        </div>
    )
}

export default PostItem

