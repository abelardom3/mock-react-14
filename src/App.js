import {useState, useEffect} from 'react'
import Posts from './components/Posts'
import Loading from './components/Loading'
import Title from './components/Title'

const App = () => {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        const getPosts = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await data.json()
            
            setPosts(json)
        }

        getPosts()
    }, [])

    return (
        <>
            <Title />
            {posts.length > 0 ? <Posts posts={posts} id="list" /> : <Loading />}
        </>
    )

    
}

export default App