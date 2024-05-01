import traveller from "../assets/traveller.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <div className="title">Best destinations around the world</div>
        <div className="subtitle">
          Travel, enjoy
          <br /> and live a new <br />
          and full life
        </div>
        <div className="description">
          Built Wicket longer admire do barton vanity itself do in it.
          <br /> Preferred to sportsmen it engrossed listening. Park gate
          <br /> sell they west hard for the.
        </div>
        <button className="find-out-button">Find out more</button>
      </div>
      <div className="image-container">
        <img className="hero-image" src={traveller} alt="traveller" />
      </div>
    </div>
  );
};

export default Hero;
