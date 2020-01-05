import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
//improt routes 
import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import SinglePost from './components/pages/Post/SinglePost';
import NewPost from './components/pages/NewPost/NewPost';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

class App extends React.Component {
  state = {
    posts: [],
  }
  componentDidMount() {
    fetch('http://localhost:8000/api/posts')
      .then(res => res.json())
      .then(res => {
        this.setState({ posts: res });
      });
  }
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Posts} />
          <Route path='/posts/new' exact component={NewPost} />
          <Route path='/posts/:id' exact component={SinglePost} props={this.props} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }
};

export default App;