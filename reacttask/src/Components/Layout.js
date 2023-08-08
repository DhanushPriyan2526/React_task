import { Outlet, Link } from "react-router-dom";
import './Layout.css'
const Layout = () => {
  return (
    <div >
      <nav className="head">
            <Link to="/">Home</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/projects">Projects</Link>
      </nav>
      <Outlet />
    </div>
  )
};

export default Layout;