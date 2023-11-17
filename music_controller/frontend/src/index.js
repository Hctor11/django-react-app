import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoomJoinPage from "./components/RoomJoinPage";
import HomePage from "./components/HomePage";
import CreateRoomPage from "./components/CreateRoomPage";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
