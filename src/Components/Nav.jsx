
import {NavLink}from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      
      <nav className='flex gap-20 bg-green-200 justify-center h-32 w-full text-center'>
      <h1 className='text-blue-900 text-5xl justify-center'>
        Image Viwer
      </h1>
      
        <NavLink className = {(e)=>(e.isActive ? "text-white-200 ":"")}
        style={(e) =>
          e.isActive ? { display:"none" } : {}
      }
            to="/">
          Home
        </NavLink>
    


      </nav>
    </div>
  )
}

export default Nav
