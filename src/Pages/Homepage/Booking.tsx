import lady from "../../assets/image/imagePayments.png";
const Booking = () => {
  return (
    <div className='w-full py-[30px] font-pop flex flex-col items-center justify-center'>
      <div className='w-[90%] flex flex-col items-center justify-center '>
        <h6 className='text-[12px] mb-[20px] w-full'>BOOKING FAB LAB</h6>

        <div className='w-full flex justify-between'>
          <h6 className='text-[50px] w-[45%]'>
            YOUR JOURNEY <br />
            STARTS HERE
          </h6>

          <h6 className='text-[19px] w-[50%] text-justify'>
            Ready to bring your ideas to life? Book your spot at ALU's Fab Lab
            today. Our intuitive booking system allows you to reserve equipment,
            schedule workshops, and plan your next project with ease.
          </h6>
        </div>

        <div className='w-full mt-[20px] mb-[30px]'>
          <img className='w-full' src={lady} alt='' />
        </div>

        <i className='w-ful text-[22px] text-center w-[90%]'>
          Whether you're a seasoned maker or a first-time visitor, our dedicated
          support team is here to assist you every step of the way. Get ready to
          unleash your creativity and embark on an unforgettable journey of
          innovation.
        </i>
      </div>
    </div>
  );
};

export default Booking;
