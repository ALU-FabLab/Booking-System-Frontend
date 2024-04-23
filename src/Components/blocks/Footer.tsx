const Footer = () => {
  return (
    <div className='py-[30px] w-full bg-black flex flex-col items-center gap-5'>
      <div className='w-[90%]'>
        <div className=''></div>

        <div className=''></div>
      </div>

      <hr className='w-full border-[2px[ border-white' />

      <div className='w-[90%]'>
        <div className=''></div>
      </div>

      <hr className='w-full border-[2px[ border-white' />

      <div className='w-[90%] flex justify-between items-center text-white'>
        <div className='flex items-center gap-10 text-[14px] '>
          <ol className='cursor-pointer'>Log in</ol>
          <ol className='cursor-pointer'>Sign up</ol>
          <ol className='cursor-pointer'>Explore Fab Lab</ol>
          <ol className='cursor-pointer'>Book Now</ol>
        </div>

        <h6 className=''>&#169; 2024 PIXELTUNE. All right reserved.</h6>
      </div>
    </div>
  );
};

export default Footer;
