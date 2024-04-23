import logo from "../../assets/image/logo-black.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  //     const [hovered, setHovered] = React.useState(false);

  //     // Function to handle hover event
  //   const handleHover = () => {
  //     setHovered(!hovered);
  //   };

  // const [show, setShow] = React.useState(false);

  // const showLogoAlone = () => {
  //     setShow(!show)
  // }

  return (
    <div className='w-full h-[70px] relativ z-40 bg-white flex items-center justify-center shadow-md fixed'>
      <div className='w-[90%] flex items-center justify-between '>
        <NavLink to='/'>
          <div className='w-[40px]'>
            <img className='max-w-full' src={logo} />
          </div>
        </NavLink>

        <div className='flex items-center gap-10'>
          <ol
            id='menu'
            className='border-[2px] border-[#f5f5f5] p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out hover:border-non hover:bg-gray-200 relative inline-block'
          >
            <h6 className=''>What We Do</h6>
            <nav
              id='menu2'
              className='absolute top-[75px] bg-white z-40 w-[280px] h-[180px] p-3 border-[1px shadow-md rounded-md '
            >
              <h6 className='font-bold text-[18px] relative z-40 mb-[10px]'>
                What We Do
              </h6>
              <hr className='w-full border-[1px] mb-[10px]' />
              <div className='flex flex-col gap-3 items-center justify-center'>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>Fab Lab</h6>
                  <h6>Co-Working Space</h6>
                </div>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>Office Space</h6>
                  <h6>Meeting Room</h6>
                </div>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>Event Space</h6>
                </div>
              </div>
            </nav>
          </ol>

          <ol
            id='menu3'
            className='border-[2px] border-[#f5f5f5] p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out hover:border-non hover:bg-gray-200 relative '
          >
            <h6 className=''>Get Started</h6>
            <nav
              id='menu4'
              className='absolute top-[75px] bg-white z-40 w-[360px] h-[180px] p-3 border-[1px shadow-md rounded-md'
            >
              <h6 className='font-bold text-[18px] relative z-40 mb-[10px]'>
                Get Started
              </h6>
              <hr className='w-full border-[1px] mb-[10px]' />
              <div className='flex flex-col gap-3 items-center justify-center'>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>Book Fab Lab</h6>
                  <h6>Book a Meeting Room</h6>
                </div>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>Talk To An Expert</h6>
                  <h6>Book A Co-Working Space</h6>
                </div>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>Book An Office Space</h6>
                  <h6>Book An Event Space</h6>
                </div>
              </div>
            </nav>
          </ol>

          <ol
            id='menu5'
            className='border-[2px] border-[#f5f5f5] p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out hover:border-non  hover:bg-gray-200'
          >
            Discover Fab Lab
            <nav
              id='menu6'
              className='absolute top-[75px] bg-white z-40 w-[280px] h-[180px] p-3 border-[1px shadow-md rounded-md'
            >
              <h6 className='font-bold text-[18px] relative z-40 mb-[10px]'>
                Discover Fab Lab
              </h6>
              <hr className='w-full border-[1px] mb-[10px]' />
              <div className='flex flex-col gap-3 items-center justify-center'>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>About Us</h6>
                </div>
              </div>
            </nav>
          </ol>

          <ol
            id='menu7'
            className='border-[2px] border-[#f5f5f5] p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out hover:border-non hover:bg-gray-200'
          >
            Events
            <nav
              id='menu8'
              className='absolute top-[75px] bg-white z-40 w-[280px] h-[180px] p-3 border-[1px shadow-md rounded-md '
            >
              <h6 className='font-bold text-[18px] relative z-40 mb-[10px]'>
                Events
              </h6>
              <hr className='w-full border-[1px] mb-[10px]' />
              <div className='flex flex-col gap-3 items-center justify-center'>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>Fab 1</h6>
                </div>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>Fab 2</h6>
                </div>
              </div>
            </nav>
          </ol>

          <ol
            id='menu9'
            className='border-[2px] border-[#f5f5f5] p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out hover:border-non hover:bg-gray-200'
          >
            Projects
            <nav
              id='menu10'
              className='absolute top-[75px] bg-white z-40 w-[280px] h-[180px] p-3 border-[1px shadow-md rounded-md '
            >
              <h6 className='font-bold text-[18px] relative z-40 mb-[10px]'>
                Events
              </h6>
              <hr className='w-full border-[1px] mb-[10px]' />
              <div className='flex flex-col gap-3 items-center justify-center'>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>Electric Bike</h6>
                </div>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>Smart Walking stick</h6>
                </div>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>Hexacopter Drone</h6>
                </div>
              </div>
            </nav>
          </ol>

          <ol
            id='menu11'
            className='border-[2px] border-[#f5f5f5] p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out hover:border-non  hover:bg-gray-200'
          >
            Help
            <nav
              id='menu12'
              className='absolute top-[75px] bg-white z-40 w-[280px] h-[180px] p-3 border-[1px shadow-md rounded-md '
            >
              <h6 className='font-bold text-[18px] relative z-40 mb-[10px]'>
                Help
              </h6>
              <hr className='w-full border-[1px] mb-[10px]' />
              <div className='flex flex-col gap-3 items-center justify-center'>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>FAQ</h6>
                </div>
                <div className='w-[85%] flex items-center justify-between text-[12px]'>
                  <h6>Customer Support</h6>
                </div>
              </div>
            </nav>
          </ol>
        </div>

        {/* <div className="p-2 border-black border-[1px] rounded-full">
                <FaUser />
            </div>

            <button className="bg-[#e52500] text-white">
                Book Now
            </button> */}

        <div className='flex items-center gap-5'>
          <NavLink to='/signin'>
            <button className='border-[#e52500] text-[#e52500] border-[1px] text-whit hover:bg-[#e52500] hover:text-white transition-all duration-500 ease-in-out hover:border-none'>
              Signin
            </button>
          </NavLink>

          <NavLink to='/signup'>
            <button className='bg-[#e52500] text-white transition-all duration-500 ease-in-out hover:border-[#e52500] hover:text-[#e52500] hover:bg-transparent '>
              Register
            </button>
          </NavLink>
        </div>
      </div>

      {/*<nav id="menu" className={`hover-menu ${hovered ? 'show' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>*/}
    </div>
  );
};

export default Header;
