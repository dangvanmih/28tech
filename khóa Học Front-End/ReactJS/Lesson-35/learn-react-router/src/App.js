import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Error404 from "./pages/Error404"
import LayoutDefault from "./layout/layoutDefault"
import Blog from './pages/Blog';
import BlogNews from './pages/Blog/BlogNews';
import BlogRelated from './pages/Blog/BLogRelated';
import BlogAll from './pages/Blog/BlogAll';
function App() {
  return (
    <>

      <Routes>
        {/*“Tất cả các route bên trong sẽ được bọc bởi LayoutDefault”. */}
        <Route path='/' element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} >
            <Route index element={<BlogAll />} /> {/*index routes: dùng để khi cpn cha render thì nó cũng đc render */}
            <Route path='news' element={<BlogNews />} />
            <Route path='related' element={<BlogRelated />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
      {/* Nội dung sẽ thay đổi phần bên trong thông qua <Outlet />. */}
    </>
  );
}

export default App;
