import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

/* useEffect */
// 두 개의 argument를 가지는 함수
// 첫 번째 argument: 한 번만 실행하고 싶은 코드
// 두 번째 argument:
//  - []공백일경우 -> 최초 1회 실행
//  -[keyword,...]값이 있는 경우 -> 해당 값이 변할 때마다 실행
//  - 여러 개 입력 가능

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' change" );
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' change" );
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'counter' & 'keyword' change" );
  }, [counter, keyword]);
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
