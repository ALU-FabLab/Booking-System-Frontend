import lady from "../../assets/image/imagePayments.png";

const Community = () => {
  return (
    <div className='w-full py-[30px] font-pop flex flex-col items-center justify-center'>
      <div className='w-[90%] flex flex-col items-center justify-center '>
        <h6 className='text-[12px] mb-[20px] w-full'>
          A COMMUNITY WITH FAB LAB
        </h6>

        <div className='w-full flex justify-between'>
          <h6 className='text-[50px] w-[45%]'>
            JOIN OUR <br />
            THRIVING <br />
            COMMUNITY
          </h6>

          <h6 className='text-[19px] w-[50%] text-justify'>
            Become a part of our vibrant community of makers, creators, and
            innovators. Whether you're a student, entrepreneur, or seasoned
            professional, you'll find a supportive environment where you can
            learn, grow, and collaborate.
          </h6>
        </div>

        <div className='w-full mt-[20px] mb-[30px]'>
          <img className='w-full' src={lady} alt='' />
        </div>

        <i className='w-ful text-[22px] text-center w-[90%]'>
          Together, we're shaping the future of innovation and making a
          difference in the world. Join us and be a part of something truly
          extraordinary.
        </i>
      </div>
    </div>
  );
};

export default Community;
