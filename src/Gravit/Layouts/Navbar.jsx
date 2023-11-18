import { useState } from 'react';
import logo from '../../assets/img/logo.svg'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
  const navData = [
    {
      id: 1,
      label: "Home",
      path: "/"
    },
    {
      id: 2,
      label: "About",
      path: "/about"
    },
    {
      id: 3,
      label: "Service",
      path: "/service"
    },
    {
      id: 4,
      label: "Products",
      path: "/product"
    },
    {
      id: 5,
      label: "Contact",
      path: "/contact"
    },
  ]
  const { pathname } = useLocation()
  const [active, setActive] = useState(false)
  console.log(pathname)
  return (
    <div className='top-0 sticky z-50 bg-[#E8EDFF]'>
      <div className='xyc  justify-between px-3 md:px-8 p-1 relative py-3 '>
        <div>
          <img src={logo} alt="" className='w-[150px] md:w-[170px] object-contain'/>
        
        </div>
        <div>
          <div className='md:hidden p-1 xyc' onClick={() => setActive(!active)}>
            <i className={`text-[1.5rem] ${active ? "icon-menu-alt " : "icon-menu-right-alt"}`} ></i>
          </div>
          <ul className='hidden md:flex  gap-4'>
            {
              navData.map((el, i, _) => {
                return <li key={i}><Link to={el.path} className={`${pathname == el.path ? "text-teal-800" : "text-slate-400"}`}>{el.label}</Link></li>
              })
            }
          </ul>
        </div>

      </div>
      {
        active &&
        <div className='absolute w-full h-screen boxblur'>
          <ul className='flex flex-col md:hidden  gap-4 px-3 py-2'>
            {
              navData.map((el, i, _) => {
                return <Link key={i}  onClick={() => setActive(!active)} to={el.path} className={`p-2 flex yc justify-between ${pathname == el.path ? "text-teal-800 " : "text-slate-400"}`}><span>{el.label}</span><i className='icon-angle-right-fill'></i></Link>
              })
            }
          </ul>
        </div>
      }
    </div>

  );
};

export default Navbar;
