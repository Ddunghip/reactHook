import useFetch from "../customize/fetch";
import './Blog.scss';
import { Link, useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newData, setNewData] = useState([])


    const { data: dataBlogs, loading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts', false)
    console.log(dataBlogs, loading, isError);

    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let newDataSimple = dataBlogs.slice(90);
            setNewData(newDataSimple);
            // console.log(newData, loading, isError);

        }
    }, [dataBlogs])

    const handleAddNew = (blog) => {
        let data = newData;
        data.unshift(blog);
        console.log('check blog', blog);

        setShow(false);
        setNewData(data);

    }
    const handleDeleteBlog = (id) => {
        let data = newData
        data = data.filter(item => item.id !== id)
        setNewData(data)
        console.log('check delete id', id, data);


    }

    return (
        <>

            <>
                <Button variant="primary" className="my-3" onClick={handleShow}>
                    Add new Blog
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewBlog handleAddNew={handleAddNew} />

                    </Modal.Body>

                </Modal>
            </>

            <div><button className="btn-add-new" onClick={handleAddNew}>+ Add new blog</button></div>
            <div className="blog-container">
                {newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">
                                <span>{item.title}</span>
                            </div>
                            <div className="body"> {item.body}{item.content}</div>

                            <button>
                                <Link to={`/blog/${item.id}`}>  View Detail</Link>

                            </button>
                            <button onClick={() => handleDeleteBlog(item.id)}>Delete</button>

                        </div>
                    )
                })}
                {loading === true &&
                    <div style={{ textAlign: 'center !important', width: '100%' }}>Loading Data...</div>}
            </div>
        </>
    )
}
export default Blog;

