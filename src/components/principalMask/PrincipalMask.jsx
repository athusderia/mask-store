import "./principalMask.css"; // Import as a JS object

export const PrincipalMask = ({ image, description }) => {
  return (
    <div className="principal-mask-box"> {/* Use the class from the styles object */}
      <img src={image} alt={description} className="mask-image" />
    </div>
  );
};