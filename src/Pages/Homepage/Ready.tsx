import phone from "../../assets/image/phones.png";

const Ready = () => {
  return (
    <div className='w-full py-[30px] h-[95vh] flex items-center justify-center relative'>
      <div className='w-[90%]'>
        <div className='flex flex-col gap-4'>
          <h4 className='text-[50px] font-bold'>
            Ready to get <br />
            started
          </h4>

          <p className='text-[15px] w-[35%]'>
            Embark on your creative journey with us. Explore our Fab Lab,
            connect with our vibrant community, and turn your ideas into
            reality. Let's create something extraordinary together.
          </p>

          <div className='flex items-center gap-4'>
            <button className='bg-black rounded-md text-white p-2 px-4'>
              Explore Fab Lab
            </button>

            <button className='bg-transparent border-[1px] p-2 border-black px-4 '>
              Book Now
            </button>
          </div>
        </div>
      </div>

      <div className='absolute w-[650px] bottom-0 right-0'>
        <img className='w-full' src={phone} alt='' />
      </div>
    </div>
  );
};

export default Ready;
