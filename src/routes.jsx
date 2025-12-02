import Home from "./pages/home/Home"
import CourseInfo from "./pages/CourseInfo/CourseInfo"
import Explore from "./pages/Explore/Explore"
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo"
import ShoppingBag from "./pages/ShoppingBag/ShoppingBag"
import Login from "./components/Login/Login"
import Register from "./pages/Register/Register"

const routes = [
    {path: '/', element: <Home />},
    {path: '/course-info', element: <CourseInfo />},
    {path: '/explore', element: <Explore />},
    {path: '/article-info:articleName', element: <ArticleInfo />},
    {path: '/shoppingbag', element: <ShoppingBag />},
    {path:'/login', element: <Login />},
    {path:'/register', element: <Register />},
]

export default routes