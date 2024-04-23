import lady from "../../assets/image/imagePayments.png";
const About = () => {
  return (
    <div className='w-full py-[30px] font-pop flex flex-col items-center justify-center'>
      <div className='w-[90%] flex flex-col items-center justify-center '>
        <h6 className='text-[12px] mb-[20px] w-full'>ABOUT FAB LAB</h6>

        <div className='w-full flex justify-between'>
          <h6 className='text-[50px] w-[45%]'>
            Welcome to <br />
            ALU's Fab Lab
          </h6>

          <h6 className='text-[19px] w-[50%] text-justify'>
            Step into the world of innovation with ALU's Fab Lab Booking System.
            But what exactly is a Fab Lab? It's more than just a workshop; it's
            a hub of creativity, a sanctuary for dreamers, makers, and
            innovators.
          </h6>
        </div>

        <div className='w-full mt-[20px] mb-[30px]'>
          <img className='w-full' src={lady} alt='' />
        </div>

        <i className='w-ful text-[22px] text-center w-[90%]'>
          From 3D printing to laser cutting, from electronics to textiles, the
          Fab Lab is where ideas come to life. It's a playground of
          possibilities where innovation is nurtured and imagination thrives.
          Whether you're an artist, engineer, or entrepreneur, join us on this
          exhilarating journey of exploration and creation. Welcome to the Fab
          Lab, where innovation knows no limits.
        </i>
      </div>
    </div>
  );
};

export default About;
