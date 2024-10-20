import { useEffect, useRef } from 'react';

export const WithRef = () => {
  const inputEl = useRef(null);
  console.log('inputEl ', inputEl);

  const numRef = useRef(0);

  const handleChangeNumRef = () => {
    numRef.current = numRef.current + 1;
  }

  useEffect(() => {
    console.log('inputEl from useEffect ', inputEl);
  }, []);

  useEffect(() => {
    console.log('numRef from useEffect ', numRef);
  });

  return (
    <div>
      <input placeholder='name' ref={inputEl} />

      <button onClick={handleChangeNumRef}>{numRef.current}</button>
    </div>
  );
}