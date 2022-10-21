import PostItem from './PostItem'

const Posts = ({ posts, getSingle }) => {
    return posts.map((post) => (
        <PostItem post={post} key={post.id} getSingle={getSingle} />
    ))
}

export default Posts