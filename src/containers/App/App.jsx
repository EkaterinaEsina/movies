import React from 'react';
import { RouterProvider } from 'react-router-dom';

// import { Book } from './components/Book';
// import { Counter } from './components/Counter';
// import { Form } from './components/Form';
// import { FormWithRef } from './components/FormWithRef';
// import { Posts } from './containers/Posts';
// import { Timer } from './components/Timer';
// import { Movies } from './containers/Movies';
// import { Shop } from './containers/Shop';
// import { SubscriptionForm } from './components/SubscriptionForm';
// import { UncontrolledForm } from './components/UncontrolledForm';

import { router } from './router';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isCounting: false,
      posts: [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
      ]
    }
  }

  componentDidMount() {
    const userTimer = localStorage.getItem('count');
    if (userTimer) {
      this.setState({ count: +userTimer })
    }
  }

  componentDidUpdate() {
    // можно записывать значение счетчика в локалСторадж или здесь, или в pauseTimer
    // localStorage.setItem('count', this.state.count);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  startTimer = () => {
    this.setState({ isCounting: true });

    this.timerId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  pauseTimer = () => {
    this.setState({ isCounting: false });
    clearInterval(this.timerId);

    localStorage.setItem('count', this.state.count);
  }

  resetTimer = () => {
    this.setState({ isCounting: false, count: 0 });
    clearInterval(this.timerId);
  }

  render() {
    return <RouterProvider router={router} />;
  };
}

export default App;
