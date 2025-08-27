import { Header } from "../components/header/Header";
import { PrincipalMask } from "../components/principalMask/PrincipalMask";
import { MaskGallery } from "../components/maskGallery/MaskGallery";
import principalMask from "../assets/merch/principal-mask2.jpg";

export const Home = () => {
  return (
    <>
      {/* Header */}
      <Header></Header>
      {/* Principal mask big */}
      <PrincipalMask image={principalMask}></PrincipalMask>
      {/*Mask Galery small*/}
      <MaskGallery></MaskGallery>
      {/*Footer*/}
    </>
  );
};
