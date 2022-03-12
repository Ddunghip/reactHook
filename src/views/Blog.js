import useFetch from "../customize/fetch";
import './Blog.scss';
import { Link } from "react-router-dom";
const Blog = () => {

    const { data: dataBlogs, loading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts', false)
    // console.log(dataBlogs, loading, isError);
    let newData = [];

    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(90)
        console.log(newData, loading, isError);

    }

    return (
        <div className="blog-container">
            {newData && newData.length > 0 && newData.map(item => {
                return (
                    <div className="single-blog" key={item.id}>
                        <div className="title">{item.title}</div>
                        <div className="body"> {item.body}</div>
                        <button>
                            <Link to={`/blog/${item.id}`}>  View Detail</Link>

                        </button>

                    </div>
                )
            })}
            {loading === true &&
                <div style={{ textAlign: 'center !important', width: '100%' }}>Loading Data...</div>}
        </div>
    )
}
export default Blog;