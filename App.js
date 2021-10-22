import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";

import Header from "./Components/Header";
import Image from "./Components/Image";
import TextArea from "./Components/TextArea";
import CartProvider from "./Components/Store/CartProvider";
import MobileSidebar from "./Components/MobileUI/MobileSidebar";
import ControlledCarousel from "./Components/MobileUI/Carousel";
import Media from "react-media";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const setShowModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const setShowSidebarHandler = () => {
    setShowSidebar(true);
  };

  const hideSidebarHandler = () => {
    setShowSidebar(false);
  };

  return (
    <CartProvider>
      <div className="App">
        <Header
          onClick={setShowModalHandler}
          onsidebar={setShowSidebarHandler}
        />

        <main>
          <Media queries={{ medium: { maxWidth: 760 } }}>
            {(matches) =>
              matches.medium ? (
                <ControlledCarousel />
              ) : (
                <div className="divide">
                  <Image />
                </div>
              )
            }
          </Media>

          <TextArea />
        </main>
        {showModal && <Cart onClose={hideModalHandler} />}
        {showSidebar && <MobileSidebar onClose={hideSidebarHandler} />}
      </div>
    </CartProvider>
  );
}

export default App;
