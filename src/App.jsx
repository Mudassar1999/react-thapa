/* eslint-disable no-unused-vars */
import "./App.css";
import { Card } from "./components/Card";
import users from "../users.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup.jsx";
import TestingTutorial from "./components/TestingTutorial.jsx";
import ClassComponent from "./components/Class.jsx";
import Todo from "./projects/Todo.jsx";
import PracTodo from './projects/PracTodo.jsx'

function App() {
  // return React.createElement("h1", null, "Mudassar");
  const handleClickButton = () => {
    alert("Thanks for CLicking me.");
  };
  const handleHoverButton = () => {
    alert("Thanks for Hovering me.");
  };

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2 style={{ margin: "0px" }}>Our Team</h2>
      <p style={{ marginTop: "0px" }}>
        Connect with us to dive into the world of Innovative Solutions.
      </p>
      <div className="card-container">
        {users.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
      </div> */}
      {/* <Navbar /> */}
      {/* <Header /> */}
      {/* <Login /> */}
      {/* <Signup /> */}

      {/* <TestingTutorial
        handlers={{
          handleClickButton,
          handleHoverButton,
        }}
      /> */}

      {/* <Todo /> */}
      <PracTodo />

      {/* <ClassComponent age='25' /> */}
    </>
  );
}

export default App;
