import lady from "../../assets/image/imagePayments.png";

const Support = () => {
  return (
    <div className='w-full py-[30px] font-pop flex flex-col items-center justify-center'>
      <div className='w-[90%] flex flex-col items-center justify-center '>
        <h6 className='text-[12px] mb-[20px] w-full'>SUPPORT FROM FAB LAB</h6>

        <div className='w-full flex justify-between'>
          <h6 className='text-[50px] w-[45%]'>
            WE'RE HERE TO <br />
            HELP
          </h6>

          <h6 className='text-[19px] w-[50%] text-justify'>
            Have questions or need assistance? Our dedicated support team is
            here to help. Whether you need technical support, guidance on your
            project, or simply want to learn more about our services, we're just
            a click away.
          </h6>
        </div>

        <div className='w-full mt-[20px] mb-[30px]'>
          <img className='w-full' src={lady} alt='' />
        </div>

        <i className='w-ful text-[22px] text-center w-[90%]'>
          Contact us today and let us help you bring your ideas to life. At
          ALU's Fab Lab, your success is our priority.
        </i>
      </div>
    </div>
  );
};

export default Support;
