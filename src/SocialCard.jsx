import "./SocialCard.css";
import Location from "./Location";
import PhoneNumber from "./PhoneNumber";
const SocialCard = ({ userData }) => {
  return (
    <div className="card">
      <div className="card__title">
        {userData.name.first}
        {userData.name.last}
      </div>
      <div className="card__body">
        <Location location={userData.location} />
        <PhoneNumber type="Home" number={userData.phone}></PhoneNumber>
        <PhoneNumber type="Mobile" number={userData.cell}></PhoneNumber>
        <div className="card__image">
          <img src={userData.picture.medium} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
