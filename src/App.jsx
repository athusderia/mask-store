import "./App.css";
import { Header } from "./components/header/Header";
import { Mask } from "./components/mask/Mask";
import { db } from "./information/Masks-information.js";
import mask1 from "./assets/merch/mask1.png";

function App() {
  const maskInfo = db.find((mask) => mask.id === 1);

  return (
    <>
      <Header />
      <div className="principal-container">
        <div className="content">
          <Mask
            description={maskInfo.description}
            price={maskInfo.price}
            image={mask1}
          />
        </div>
      </div>
    </>
  );
}

export default App;
