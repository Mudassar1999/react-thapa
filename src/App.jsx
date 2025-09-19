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
import PracTodo from "./projects/PracTodo.jsx";
import TodoApp from "./components/TodoApp.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/ContactUs.jsx";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import fetchData from "./helper/fetchData.jsx";
import Products from "./pages/Products.jsx";
import ProductView from "./components/ProductView.jsx";
import { formSubmit } from "./helper/formSubmit.jsx";
import { useRef } from "react";
import { TestContext, TestProvider } from "./hooks/contextAPI.jsx";
import { Counter } from "./hooks/Counter.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contactUs",
        Component: Contact,
        action: formSubmit,
      },
      {
        path: "/products",
        Component: Products,
        loader: fetchData,
      },
      {
        path: "/products/:productId",
        Component: ProductView,
        loader: fetchData,
      },
    ],
  },
]);
function App() {
  const username = useRef(null);
  //   // return React.createElement("h1", null, "Mudassar");
  //   const handleClickButton = () => {
  //     alert("Thanks for CLicking me.");
  //   };
  //   const handleHoverButton = () => {
  //     alert("Thanks for Hovering me.");
  //   };
  // return (
  //   <>
  //     {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
  //       <h2 style={{ margin: "0px" }}>Our Team</h2>
  //       <p style={{ marginTop: "0px" }}>
  //         Connect with us to dive into the world of Innovative Solutions.
  //       </p>
  //       <div className="card-container">
  //         {users.map((user) => {
  //           return <Card user={user} key={user.id} />;
  //         })}
  //       </div> */}
  //     {/* <Navbar /> */}
  //     {/* <Header /> */}
  //     {/* <Login /> */}
  //     {/* <Signup /> */}
  //     {/* <TestingTutorial
  //         handlers={{
  //           handleClickButton,
  //           handleHoverButton,
  //         }}
  //       /> */}
  //     {/* <Todo /> */}
  //     <PracTodo />
  //     {/* <TodoApp /> */}
  //     {/* <ClassComponent age='25' /> */}
  //   </>
  // );

  return <PracTodo />;
  // return <RouterProvider router={router} ref={username}/>;

  // return (
  //   <TestProvider>
  //     <Counter />
  //     <PracTodo />
  //   </TestProvider>
  // );
}

export default App;
