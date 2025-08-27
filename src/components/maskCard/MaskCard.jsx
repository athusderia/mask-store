import "./MaskCard.css";

export const MaskCard = ({ image, description, price }) => {
  return (
    <div className="mask-card">
      <div className="mask-box">
        <img className="img-animada" src={image} alt={description} />
      </div>
      <span className="mask-description">
        <p>{description}</p>
        <p>${price} USD</p>
      </span>
    </div>
  );
};
