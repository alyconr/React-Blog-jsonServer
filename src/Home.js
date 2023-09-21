import useFetch from './useFetch';
import BlogList from './BlogList';

const Home = () => {
  const { data: blogs, error, loading } = useFetch('https://blog-api-service-citl.onrender.com/blogs');
  return (
    <div className="home">
      {error && <div className="Error">{error}</div>}
      {loading && (
        <div className="spinner-container">
          <div className="loading-spinner" />
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
