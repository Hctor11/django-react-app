import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoomJoinPage from "./components/RoomJoinPage";
import HomePage from "./components/HomePage";
import CreateRoomPage from "./components/CreateRoomPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/join",
    element: <RoomJoinPage />,
  },
  {
    path: "/create",
    element: <CreateRoomPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("app")
);
