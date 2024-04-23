import { NavLink } from "react-router-dom";
import logoBlack from "../../assets/image/logo-signin.png";

const Signup = () => {
  return (
    <div className='w-full h-[135vh] flex justify-center items-center font-pop overflow-hidden'>
      <div className='w-[90%] flex justify-between items-center'>
        <div className='w-[40%] flex flex-col gap-3'>
          <h6 className='font-bold mb-[10px] text-[25px]'>Create an account</h6>

          <form action='' className='w-full flex flex-col gap-3 items-start'>
            <div className='w-full flex justify-between items-center'>
              <div className='w-[48%]'>
                <h6 className='mb-[5px] font-bold'>First Name</h6>
                <input
                  className='border-[1px] border-[#dfdede] p-2 w-full'
                  type='text'
                  placeholder='First Name'
                  required
                />
              </div>

              <div className='w-[48%]'>
                <h6 className='mb-[5px] font-bold'>Last Name</h6>
                <input
                  className='border-[1px] border-[#dfdede] p-2 w-full'
                  type='text'
                  placeholder='Last Name'
                  required
                />
              </div>
            </div>

            <div className='w-full'>
              <h6 className='mb-[5px] font-bold'>Project Description</h6>
              <input
                className='border-[1px] border-[#dfdede] p-2 w-full'
                type='text'
                placeholder='Your Project Description'
                required
              />
            </div>

            <div className='w-full'>
              <h6 className='mb-[5px] font-bold'>University Email Address</h6>
              <input
                className='border-[1px] border-[#dfdede] p-2 w-full'
                type='text'
                placeholder='University Email Address'
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

            <div className='w-full'>
              <h6 className='mb-[5px] font-bold'>Confirm Password</h6>
              <input
                className='border-[1px] border-[#dfdede] p-2 w-full'
                type='password'
                placeholder='Confirm Password'
                required
              />
            </div>

            <button className='bg-black text-white hover:bg-[#e52500] p-2 border-none hover:border-none rounded-none px-6 mt-[5px]'>
              Create Account
            </button>

            <h6 className='text-[14px] mt-[10px]'>
              Already have an account?{" "}
              <NavLink to='/signin'>
                <span className='text-[#dfdede]'>Sign in</span>
              </NavLink>
            </h6>
          </form>
        </div>

        <div className='w-[55%] h-full flex justify-center items-center relative'>
          <div className='bg-white p-5 flex flex-col gap-4 w-[350px] h-[400px shadow-md'>
            <div className='flex flex-col gap-2'>
              <h5>
                “Innovation is seeing what everybody has seen and thinking what
                nobody has thought”
              </h5>
              <h5 className='bg-[#e7fed4] w-full p-1'>
                Dr. ALBERT SZENT-Györgyi
              </h5>
            </div>
            <div className='flex flex-col gap-2'>
              <h5>
                “The role of the Fab Lab is not just about making things, but
                about making the tools and knowledge accessible to make
                anything”
              </h5>
              <h5 className='bg-[#e7fed4] w-full p-1'>GERSHENFELD</h5>
            </div>
            <div className='flex flex-col gap-2'>
              <h5>
                “Problems cannot be solved with the same kind of thinking used
                when they were created”
              </h5>
              <h5 className='bg-[#e7fed4] w-full p-1'>ALBERT EINSTEIN</h5>
            </div>
          </div>

          <div className='absolute w-[130px] bottom-[-80px] right-[-0px]'>
            <img className='w-full' src={logoBlack} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
