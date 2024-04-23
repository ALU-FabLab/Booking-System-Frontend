import { NavLink } from "react-router-dom";
import signin from "../../assets/image/signIn-Img.png";

const Signin = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center font-pop overflow-hidden'>
      <div className='w-[90%] flex justify-between items-center mt-[80px]'>
        <div className='w-[40%] flex flex-col gap-3'>
          <h6 className='font-bold mb-[10px] text-[25px]'>Sign in</h6>

          <form action='' className='w-full flex flex-col gap-3 items-start'>
            <div className='w-full'>
              <h6 className='mb-[5px] font-bold'>Student's Email Address</h6>
              <input
                className='border-[1px] border-[#dfdede] p-2 w-full'
                type='text'
                placeholder="Student's  Email Address"
                required
              />
            </div>

            <div className='w-full'>
              <h6 className='mb-[5px] font-bold'>Password</h6>
              <input
                className='border-[1px] border-[#dfdede] p-2 w-full'
                type='password'
                placeholder='Password'
                required
              />
            </div>

            <button className='bg-black text-white hover:bg-[#e52500] p-2 border-none hover:border-none rounded-none px-6 mt-[5px]'>
              Signin
            </button>

            <h6 className='text-[14px] mt-[10px]'>
              Need an account?{" "}
              <NavLink to='/signup'>
                <span className='text-[#dfdede]'>Sign up</span>
              </NavLink>
            </h6>
          </form>
        </div>

        <div className='w-[55%] h-full flex justify-center items-center relative'>
          <img className='w-ful' src={signin} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Signin;
