import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Container, Logo, LogoutBtn } from "../index.js";

const Header = () => {

  const authStatus = useSelector((state) => state.auth.status);
  
  const navigate = useNavigate();
  
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    }, 
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus
    }
  ]

  return (
     <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mx-4 my-auto font-semibold text-xl">
            <Link to="/">
             <Logo width="40px" />
            </Link>
          </div>

          <ul className='flex ml-auto'>
            { navItems.map((item) => 
              item.active ? (
                <li key={item.name} className="mx-1 sm:mx-2 list-none font-medium sm:font-semibold">

                  <button onClick={() => navigate(item.slug)}
                    className='inline-block px-3 py-1 sm:py-2 sm:px-6 duration-200  hover:bg-blue-100 rounded-full'>
                    {item.name}
                  </button>
                </li>
              ) : null

            )}  
            {authStatus && (
              <li className="list-none font-semibold mx-1 sm:mx-2">
                <LogoutBtn/>
              </li>
            )}
          </ul>
          
        </nav>
      </Container>
     </header>
  )

}

export default Header;
