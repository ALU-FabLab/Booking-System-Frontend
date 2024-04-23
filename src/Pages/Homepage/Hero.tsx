import img from "../../assets/image/heroImg.png";
const Hero = () => {
  return (
    <div>
      <div className='w-full h-[100vh] font-pop flex items-center justify-center'>
        <div className='w-[90%] flex justify-between items-center'>
          <div className='flex flex-col gap-6 w-[50%]'>
            <h5 className='text-[55px] font-bold '>
              Unlock Creativity, <br />
              Build Innovations
            </h5>

            <h6 className='text-[14px]'>
              Empowering Minds, Shaping Futures: <br />
              Explore, Create and Collaborate in our State-of-the-Art <br />
              Fabrication Laboratory
            </h6>

            <div className='flex gap-4 items-center text-[15px]'>
              <button className='bg-black border-none text-white'>
                Explore Fab Lab
              </button>
              <button className='bg-transparent border-black border-[1px]'>
                Book Now
              </button>
            </div>
          </div>

          <div className='w-[50%] flex justify-end mt-[75px]'>
            <img className='w-[80%] h-full' src={img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
