import { useState } from 'react'
import './Blog.scss';
import axios from 'axios';


const AddNewBlog = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitButton = async () => {
        if (!title) {
            alert('empty title ')
            return;
        }
        if (!content) {
            alert('empty content ')
            return;
        }

        let data = {
            title: title,
            content: content,
            userId: 1
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        if (res && res.data) {
            let newblog = res.data;
            props.handleAddNew(newblog)
            console.log('check new', newblog);

        }


    }

    return (
        <div className="add-new-container">
            <div className="terxt-add-new"> Add new blogs </div>
            <div className='inputs-data'>
                <label>Title:</label>
                <input type='text' value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className='inputs-data'>
                <label>Content:</label>
                <input type='text' value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>
            <button className='btn-add-new' onClick={handleSubmitButton}>Submit</button>
        </div>
    )
}
export default AddNewBlog