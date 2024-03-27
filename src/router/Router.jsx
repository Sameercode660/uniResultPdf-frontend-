import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/Admin";
import App from "../App";
import ResultUpload from "../pages/ResultUpload";
import Protected from "../Protected";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    },
    {
        path: '/admin',
        element: <Admin></Admin>
    },
    {
        path: '/uploadResult',
        element: <Protected><ResultUpload></ResultUpload></Protected>
    }
])