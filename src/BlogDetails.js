import { useParams, useHistory, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    loading,
  } = useFetch(`https://blog-api-service-citl.onrender.com/blogs/${id}`);
  const history = useHistory();
  const [isEdit, setIsEdit] = useState(false);
  const [editBlog, setEditBlog] = useState({});

  useEffect(() => {
    setEditBlog(blog);
  }, [blog]);

  const saveChanges = () => {
    fetch(`https://blog-api-service-citl.onrender.com/blogs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editBlog),
    }).then(() => {
      setIsEdit(false);
      history.push('/');
    });
  };

  const deleteBlog = () => {
    fetch(`https://blog-api-service-citl.onrender.com/blogs/${id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="blog-details">
      {loading && (
        <div className="spinner-container">
          <div className="loading-spinner" />
        </div>
      )}
      {error && <div className="Error">{error}</div>}
      {blog && !isEdit && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            Written by
            {blog.author}
          </p>
          <div>{blog.body}</div>
          <button type="button" className="btn-delete" onClick={deleteBlog}>
            Delete Post
          </button>
          <button type="button" className="btn-edit" onClick={() => setIsEdit(true)}>Edit Blog</button>
          <button type="button" className="btn">
            <Link className="btn" to="/">BACK </Link>
          </button>
        </article>
      )}
      {isEdit && (
        <article className="edit">
          <h2>Edit Blog</h2>
          <form onSubmit={saveChanges}>
            <label>Blog Title:</label>
            <input
              type="text"
              value={editBlog.title || ''} // Ensure it's not null
              onChange={(e) => setEditBlog({ ...editBlog, title: e.target.value })}
            />
            <label>Blog Body:</label>
            <textarea
              value={editBlog.body || ''} // Ensure it's not null
              onChange={(e) => setEditBlog({ ...editBlog, body: e.target.value })}
            />
            <div className="actions">
              <button type="button" onClick={saveChanges}>Save</button>
              <button type="button" onClick={() => setIsEdit(false)}>Cancel</button>
            </div>
          </form>

        </article>
      )}

    </div>
  );
};

export default BlogDetails;
