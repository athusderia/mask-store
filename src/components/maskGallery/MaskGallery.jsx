import { MaskCard } from "../maskCard/MaskCard";
import mask1 from "../../assets/merch/mask1.png";
import mask2 from "../../assets/merch/mask2.png";
import mask3 from "../../assets../../assets/merch/mask3.png";
import mask4 from "../../assets/merch/mask4.png";
import { db } from "../../information/Masks-information";
import "./MaskGallery.css";
import { Button } from "../button/Button"

export const MaskGallery = () => {
  const maskImages = {
    1: mask1,
    2: mask2,
    3: mask3,
    4: mask4,
  };

  const masksToDisplay = db.filter(
    (mask) => mask.id >= 1 && mask.id <= 4
  );

  return (
    <div className="mask-gallery-container"> {/* Aquí aplicas el estilo Grid */}
      {masksToDisplay.map((maskInfo) => (
        <MaskCard className="mask-card-container"
          key={maskInfo.id}
          description={maskInfo.description}
          price={maskInfo.price}
          image={maskImages[maskInfo.id]}
        />
      ))}
      <Button title="View all"></Button>
    </div>
  );
};