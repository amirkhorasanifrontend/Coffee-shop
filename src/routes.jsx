import Home from "./pages/home/Home"
import CourseInfo from "./pages/CourseInfo/CourseInfo"
import Explore from "./pages/Explore/Explore"
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo"


const routes = [
    {path: '/', element: <Home />},
    {path: '/course-info:courseName', element: <CourseInfo />},
    {path: '/explore', element: <Explore />},
    {path: '/article-info:articleName', element: <ArticleInfo />},
]

export default routes