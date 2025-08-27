import "./principalMask.css"; 

export const PrincipalMask = ({ image, description }) => {
  return (
    <div className="principal-mask-box">
      <img src={image} alt={description} className="mask-image" />
    </div>
  );
};