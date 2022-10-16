import background from "../../images/go-it-bg.png";
import { WrapImage, Image } from "../HomePage/HomePage.styled";

const HomePage = () => {
  return (
    <WrapImage>
      <Image src={background} alt="" />
    </WrapImage>
  );
};

export default HomePage;