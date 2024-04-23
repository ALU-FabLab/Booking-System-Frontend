import lady from "../../assets/image/imagePayments.png";

const Collaborate = () => {
  return (
    <div className='w-full py-[30px] font-pop flex flex-col items-center justify-center'>
      <div className='w-[90%] flex flex-col items-center justify-center '>
        <h6 className='text-[12px] mb-[20px] w-full'>
          COLLABORATE WITH FAB LAB
        </h6>

        <div className='w-full flex justify-between'>
          <h6 className='text-[50px] w-[45%]'>
            CONNECT <br />
            COLLABORATE <br />
            CREATE
          </h6>

          <h6 className='text-[19px] w-[50%] text-justify'>
            At ALU's Fab Lab, collaboration is at the heart of everything we do.
            Connect with like-minded innovators, exchange ideas, and embark on
            collaborative projects that push the boundaries of innovation.
          </h6>
        </div>

        <div className='w-full mt-[20px] mb-[30px]'>
          <img className='w-full' src={lady} alt='' />
        </div>

        <i className='w-ful text-[22px] text-center w-[90%]'>
          With access to the Fab Lab itself, coworking spaces, and meeting
          rooms, there's no limit to what we can achieve together. Join us as we
          shape the future of innovation, one project at a time. Welcome to the
          Fab Lab community, where ideas flourish and dreams take flight.
        </i>
      </div>
    </div>
  );
};

export default Collaborate;
