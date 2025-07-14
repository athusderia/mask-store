import "./App.css";
import { Header } from "./components/header/Header";
import principalMask from "./assets/merch/principal-mask2.jpg";
import { PrincipalMask } from "./components/principalMask/PrincipalMask.jsx";
import {MaskGallery} from "./components/maskGallery/MaskGallery.jsx"


function App() {
  return (
    <>
      <Header />
      <div>
        <PrincipalMask image={principalMask}></PrincipalMask>
      </div>
      <div>
        <MaskGallery></MaskGallery>
      </div>
    </>
  );
}

export default App;
