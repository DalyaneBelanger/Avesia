import { Navigate, RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Afrique from "./pages/Afrique";
import Asie from "./pages/Asie";
import Antarticque from "./pages/Antarticque";
import Oceanie from "./pages/Oceanie";
import Amerique from "./pages/Amerique";
import Credits from "./pages/Credits";

const App = () => {
  
    const routes = [

      {
        path: "",
        children: [
          {
            index: true,
            element: <Navigate to="/home" replace/>
          },
          {
            path: "home",
            element: <Home/>
          },
          {
            path: "afrique",
            element: <Afrique/>
          },
          {
            path: "amerique",
            element: <Amerique/>
          },
          {
            path: "asie",
            element: <Asie/>
          },
          {
            path: "oceanie",
            element: <Oceanie/>
          },
          {
            path: "antarticque",
            element: <Antarticque/>
          },
          {
            path: "credits",
            element: <Credits/>
          },
        ]
      },
      {
        path: "*",
        element: <Navigate to="/home" replace/>
      }
    ];

    return <RouterProvider router={createBrowserRouter(routes)}/>
  
}

export default App;
