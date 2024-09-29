import React from 'react';

import { Preloader } from '../../../components/Preloader';

class Post extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      comments: [],
      isCommentsLoading: true,
    }
  }

  componentDidMount() {
    // чаще всего ипсользуется для асинхронных запросов
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.post.id}/comments`)
      .then(res => res.json())
      .then(data => this.setState({ comments: data, isCommentsLoading: false }))
      .catch(err => console.error(err))
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    console.log('Post render ', this.state.posts);
    return (
      <div className="App_classComponent">
        {this.state.isCommentsLoading
          ? <Preloader />
          : <div>
              <div>
                <div key={this.props.post.id}>
                  <div>Post#{this.props.post.id}</div>
                  <div>{this.props.post.body}</div>
                  {/* {this.state.comments} */}
                </div>
                
                <button onClick={() => this.props.removePost(this.props.post.id)}>Remove this post</button>
              </div>


              {/* <div>
                Comments 
                <ul>
                  {this.state.comments.map((comment) => (
                    <li key={comment.id}>{comment.body}</li>
                  ))}
                </ul>
              </div> */}
            </div>
        }
      </div>
    );
  };
}

export { Post };
