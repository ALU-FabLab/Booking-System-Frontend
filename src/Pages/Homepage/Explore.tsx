import lady from "../../assets/image/imagePayments.png";
const Explore = () => {
  return (
    <div className='w-full py-[30px] font-pop flex flex-col items-center justify-center'>
      <div className='w-[90%] flex flex-col items-center justify-center '>
        <h6 className='text-[12px] mb-[20px] w-full'>EXPLORE FAB LAB</h6>

        <div className='w-full flex justify-between'>
          <h6 className='text-[50px] w-[45%]'>
            DISCOVER <br />
            LIMITLESS <br />
            POSSIBILITIES
          </h6>

          <h6 className='text-[19px] w-[50%] text-justify'>
            Embark on an adventure into innovation at ALU's Fab Lab. Explore our
            extensive range of cutting-edge equipment and resources meticulously
            curated to fuel your creativity and innovation.
          </h6>
        </div>

        <div className='w-full mt-[20px] mb-[30px]'>
          <img className='w-full' src={lady} alt='' />
        </div>

        <i className='w-ful text-[22px] text-center w-[90%]'>
          From 3D printers, CNC machines, and laser cutters to more tools and
          machinery on the way, there's something here for every maker, creator,
          and innovator. Join us as we push the boundaries of what's possible
          and redefine the future of innovation. Welcome to the Fab Lab, where
          imagination takes flight and creativity knows no bounds.
        </i>
      </div>
    </div>
  );
};

export default Explore;
