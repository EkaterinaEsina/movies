import { useState } from "react";

export const Main = (props) => {
  const { children } = props;

  const [isClickerShown, setIsClickerShown] = useState(false);

  return (
    <main className="container content">
      {/* <button onClick={() => setIsClickerShown(!isClickerShown)}>Show clicker</button> */}
      {/* {isClickerShown && children} */}
      {children}
    </main>
  );
}