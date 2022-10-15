import ParticlesLines from 'components/ParticlesLines/ParticlesLines';
import Weather from 'components/WeatherApp/WeatherApp';
// import { HomeTitle, WrapperHomePage } from './HomePage.styled';

const HomePage = () => {
  return (
    <div>
      <ParticlesLines />
      <Weather />
      <p>
        Hello, this is your PhoneBook. It is designed to help your brain not
        remember numbers, but write them down. Create your own unique account
        and get the opportunity to record your contacts.
      </p>
    </div>
  );
};

export default HomePage;