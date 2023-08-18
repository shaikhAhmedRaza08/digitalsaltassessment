import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/component1",
                element: <Component1 />
            },
            {
                path: "/component2",
                element: <Component2 />
            },
            {
                path: "/component3",
                element: <Component3 />
            },
        ],
    }
]);

export default router;
