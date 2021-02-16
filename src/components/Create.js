import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/')
    }

    return (
        <div className='create'>
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label >Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Yahya">yahya</option>
                    <option value="mohamed">mohamed</option>
                </select>
                <button onClick={handleSubmit}>Add blog</button>

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default CreateBlog;