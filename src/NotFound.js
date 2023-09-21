import { Link } from 'react-router-dom';

const Notfound = () => (
  <div className="not-found">
    <h1>SORRY</h1>
    <h2>Page Not Found</h2>
    <Link to="/">Go Back to Home</Link>
  </div>
);

export default Notfound;
