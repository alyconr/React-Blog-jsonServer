import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setLoading(true);

    fetch('https://blog-api-service-citl.onrender.com/blogs ', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    })
      .then(() => {
        setLoading(false);
        setTitle('');
        setBody('');
        setAuthor('');
        setSuccessMessage('Blog added!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      });
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Blog title:</span>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Blog body:</span>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <label>
          <span>Blog author:</span>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="mario">Mario</option>
            <option value="aly">Aly</option>
            <option value="samantha">Samantha</option>
            <option value="sara">Sara</option>
          </select>
        </label>
        {loading ? (
          <button type="submit" disabled>Adding Blog...</button>
        ) : (
          <button type="submit">Add Blog</button>
        )}
        {successMessage && <p>{successMessage}</p>}
        {' '}
        {/* Render success message */}
      </form>
    </div>
  );
};

export default Create;
