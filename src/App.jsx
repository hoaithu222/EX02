import { Link, NavLink } from "react-router";
import Counter from "./Components/Counter";
import Counter2 from "./Components/Counter2";
import Greeting from "./Components/Greeting";

function App() {
  return (
    <>
      <Greeting name="thu" />
      <Counter />
      <Counter2 />
      <div>
        <Link to="/home">Trang chủ</Link>
        <Link to="/about">Giới thiệu</Link>
      </div>
    </>
  );
}

export default App;
