import { useState, useEffect } from 'react'
import Posts from './components/Posts'
import Loading from './components/Loading'
import Title from './components/Title'
import SinglePost from './components/singlePost'

const App = () => {

    const [posts, setPosts] = useState([])
    const [singlePost, setSinglePost] = useState(null)


    useEffect(() => {
        const getPosts = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await data.json()

            setPosts(json)
        }

        getPosts()
    }, [])

    const getSingle = async (id) => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const json = await data.json()
        setSinglePost(json)
        console.log(json)
    }





    return (
        <>
            <Title />
            {posts.length > 0 ? <Posts posts={posts} id="list" getSingle={getSingle} /> : <Loading />}
            {singlePost === null ? <Posts posts={posts} id="list" getSingle={getSingle} /> : <SinglePost singlePost={singlePost} />}
        </>
    )


}

export default App