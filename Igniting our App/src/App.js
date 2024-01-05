import React,{ lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy } from "react";

const About = lazy(() => import("./components/About")); // IMplemeted lazy loading for Abbout component

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout></AppLayout>,
        children: [
            {
                path: "/",
                element: <Body></Body>
            },
            {
                path: "/about",
                element: <Suspense fallback={"Loading ....."}><About></About></Suspense>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/restaurent/:resId",
                element: <RestaurantMenu></RestaurantMenu>
            }
        ],
        errorElement: <Error></Error>
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}></RouterProvider>)