import "./MaskCard.css"

export const MaskCard = ({ image, description, price }) => {
  return (
    <div className="mask-box">
      <img  className="img-animada" src={image} alt={description} width="200" />
      <p>{description} a ${price}</p>
    </div>
  );
};
