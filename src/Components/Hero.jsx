import background from '../assets/bg-2.jpg'
const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    marginTop: "-80px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
const Hero = () => {
  return (
    <div style={myStyle} className='relative'>
        <div className="absolute inset-0 bg-black opacity-50">
          <div className="lg:w-3/4 md:w-10/12 lg:mx-auto lg:my-28 md:my-24 my-20 text-center lg:m-12 md:m-20 m-12 lg:p-20 md:p-10 p-5 border-2">
            <h1 className="lg:text-5xl md:text-3xl text-xl text-white font-extrabold">
              Join Us in Making a Difference
            </h1>
            <p className="lg:text-xl md:text-base text-sm text-white font-bold mt-5">
              Discover the power of giving back and join our community of
              volunteers dedicated to making a positive impact.
            </p>
          </div>
        </div>
    </div>
  );
};

export default Hero;
