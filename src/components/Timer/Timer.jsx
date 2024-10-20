import { useEffect, useReducer } from "react";

const initialState = {
  timer: 0,
  isCounting: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'startTimer': {
      return {
        ...state,
        isCounting: true,
      }
    }
    case 'stopTimer': {
      return {
        ...state,
        isCounting: false,
      }
    }
    case 'tick': {
      return {
        ...state,
        timer: state.timer + 1,
      }
    }
    case 'resetTimer': {
      return {
        ...initialState,
      }
    }
    default: 
      return state;
  }
}

export const Timer = () => {
  // const [timer, setTimer] = useState(0);
  // const [isCounting, setIsCounting] = useState(false);

  const [{ timer, isCounting }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // const userCount = +localStorage.getItem('timer') ?? 0;
    let timerId = null;

    // setTimer(userCount);
    if (isCounting) {
      timerId = setInterval(() => {
        // setTimer((prevTimer) => prevTimer + 1);
        dispatch({ type: 'tick' });
      }, 1000);
    }
    
    return () => {
      clearInterval(timerId);
    }
  }, [isCounting]);

  useEffect(() => {
    localStorage.setItem('timer', timer);
  }, [timer]);

  const startTimer = () => {
    // setIsCounting(true);
    dispatch({ type: 'startTimer' });
  }

  const pauseTimer = () => {
    // setIsCounting(false);
    dispatch({ type: 'stopTimer' });
  }

  const resetTimer = () => {
    // setIsCounting(false);
    // setTimer(0);
    dispatch({ type: 'resetTimer' });
  }

  return (
    <div className="timer">
      <h3>Timer</h3>
      <h4>{timer}</h4>
      {
        !isCounting 
          ? <button onClick={startTimer}>Start</button>
          : <button onClick={pauseTimer}>Pause</button>
      }
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}