import React from 'react';

import { Preloader } from '../../components/Preloader';
import { Post } from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {id: 'a1', name: 'JS basics'},
        {id: 'a2', name: 'JS advanced'},
        {id: 'a3', name: 'React JS'},
      ],
      isPostsLoading: true,
      comments: null,
      isCommentsLoading: false,
    }
  }

  componentDidMount() {
    // debugger;
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data, isPostsLoading: false }))
      .catch(err => console.error(err));

    // this.timerId = setInterval(() => {
    //   this.setState({ isCommentsLoading: true });
    //   fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    //     .then(res => res.json())
    //     .then(data => this.setState({ comments: data, isCommentsLoading: false }))
    // }, 10000);
  }

  componentDidUpdate() {
    // debugger;
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    this.timerId = null;
  }

  render() {
    // debugger;
    return (
      <div className="App_classComponent">
        {this.props.isPostsLoading
          ? <Preloader />
          // : <div>{this.state.posts.slice(0, 3).map((post) => <Post key={post.id} post={post} />)}</div>
          : <div>
            {this.props.posts.map((post) => (
              <Post key={post.id} post={post} addPost={this.props.addPost} removePost={this.props.removePost} />
            ))}
            <button onClick={this.props.addPost}>Add new post</button>
          </div>
        }
      </div>
    );
  };
}

export { Posts };
