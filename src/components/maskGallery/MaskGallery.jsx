import { MaskCard } from "../maskCard/MaskCard";
import mask1 from "../../assets/halloween-masks/h1.jpg"
import mask2 from "../../assets/halloween-masks/h2.jpg"
import mask3 from "../../assets/halloween-masks/h3.jpg"
import mask4 from "../../assets/halloween-masks/h4.jpg"
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
    <div>
       <div className="mask-gallery-container"> {/* Aquí aplicas el estilo Grid */}
      {masksToDisplay.map((maskInfo) => (
        <MaskCard className="mask-card-container"
          key={maskInfo.id}
          description={maskInfo.description}
          price={maskInfo.price}
          image={maskImages[maskInfo.id]}
        />
      ))}

    </div>
    <div  className="button-centered">
      <Button title="View All"></Button>
    </div>
    </div>
   
    
  );
};