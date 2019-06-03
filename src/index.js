import React from "react";
import ReactDOM from "react-dom";
import Fade from "react-reveal/Fade";
import { ParallaxProvider } from "react-scroll-parallax";
import ToutContent from "./components/ToutContent";
import NavBar from "./components/NavBar";
import CardCollection from "./components/CardCollection";
import ToutOverlap from "./components/ToutOverlap";
import BigTextLittleText from "./components/BigTextLittleText";
import VerticalLine from "./components/VerticalLine";
import CardSlider from "./components/CardSlider";
import Pullout from "./components/Pullout";

import "./styles.css";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <NavBar />
        <div className="w-screen h-screen page-hero" />
        <ToutContent textDirection="toutContent w-full my-0 mb-4 mx-auto py-20 sm:py-0  flex flex-col-reverse sm:flex-row text-left sm:text-right" />
        <ToutContent textDirection="toutContent w-full my-0 mb-4 mx-auto py-20 sm:py-0  text-left flex flex-col-reverse sm:flex-row-reverse" />
        <div className="bg-green w-full">
          <ToutContent textDirection="toutContent w-full my-0 mx-auto py-20 sm:py-0 flex flex-col-reverse sm:flex-row text-left sm:text-right bg-green" />
        </div>
        <div className="bg-purple w-full">
          <ToutContent textDirection="toutContent w-full my-0 mx-auto py-20 sm:py-0 flex flex-col-reverse sm:flex-row-reverse text-left bg-purple" />
        </div>
        <div className="w-full toutContent mx-auto">
          <ToutOverlap
            toutOverlapContent="tout-overlap mx-auto my-0 bg-left"
            totuOverlapText="toutCopy--overlap w-full ml-auto sm:w-1/2 bg-green"
          />
        </div>
        <BigTextLittleText />
        <VerticalLine />
        <ToutOverlap
          toutOverlapContent="toutContent tout-overlap mx-auto my-0 bg-right "
          totuOverlapText="toutCopy--overlap mr-auto w-full sm:w-1/2 bg-orange"
        />
        <div className="flex w-full">
          <CardCollection />
        </div>
        <CardSlider />
        <Pullout pulloutBackground="bg-green" />
      </div>
    </ParallaxProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
