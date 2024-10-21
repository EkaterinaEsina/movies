import React, { useState, useEffect } from 'react';

import { Layout } from "../../components/Layout";
import { Preloader } from '../../components/Preloader';
import { Post } from './Post';

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setIsPostsLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  const addPost = () => {
    setPosts([
      ...posts, 
      { 
        "userId": 1,
        "id": Math.random(),
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
    ]);
  };

  const removePost = (id) => {
    setPosts([...posts.filter(post => post.id !== id)]);
  };

  return (
    <Layout title="Posts">
      {isPostsLoading
        ? <Preloader />
        // : <div>{posts.slice(0, 3).map((post) => <Post key={post.id} post={post} />)}</div>
        : (
          <div>
            {posts.map((post) => (
              <Post key={post.id} post={post} addPost={addPost} removePost={removePost} />
            ))}

            <button onClick={addPost}>Add new post</button>
          </div>
        )
      }
    </Layout>
  );
}

export default Posts;
