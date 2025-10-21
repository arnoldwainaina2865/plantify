import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <Link to='/listing'>
        <div className='hero'>
          <h1 className='hero-title h1'>The Plant Shop </h1>
          <div className='hero-subtitle h4'>
            <em>Plants that make people happy</em>
          </div>
        </div>
      </Link>
    </section>
  );
};
export default Hero;
