import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import './index.css';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Notfound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>

  );
}

export default App;
