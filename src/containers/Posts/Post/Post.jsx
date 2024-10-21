import React, { useState, useEffect } from 'react';

import { Preloader } from '../../../components/Preloader';

export const Post = (props) => {
  const { post, removePost } = props;

  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then(res => res.json())
      .then(data => {
        setComments(data);
        setIsCommentsLoading(false);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      {isCommentsLoading
        ? <Preloader />
        : <div>
            <div>
              <div key={post.id}>
                <div>Post#{post.id}</div>
                <div>{post.body}</div>
                {/* {comments} */}
              </div>
              
              <button onClick={() => removePost(props.post.id)}>Remove this post</button>
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
