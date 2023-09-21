import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => (
  <div className="list-container">
    <h2 className="title">
      {title}
      (
      {blogs.length}
      )
    </h2>
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>
            written by
            {blog.author}
          </p>
          <button type="button" className="btn">
            <Link className="btn" to={`/blogs/${blog.id}`}>
              Read
              {' '}
            </Link>
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default BlogList;
