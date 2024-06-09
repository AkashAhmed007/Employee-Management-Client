import Banner from "../Components/Banner";
import EmployeeReview from "../Components/EmployeeReview";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <>
      <div className="my-20 min-h-screen">
        <Hero></Hero>
        <Banner></Banner>
        <EmployeeReview></EmployeeReview>
      </div>
    </>
  );
};

export default Home;
