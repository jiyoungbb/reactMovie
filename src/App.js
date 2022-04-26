import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

/* useEffect */
// 두 개의 argument를 가지는 함수
// 첫 번째 argument: 한 번만 실행하고 싶은 코드
// 두 번째 argument: 배열을 넣어줌(다음 강의에)

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");

  useEffect(() => {
    console.log("call the api");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
