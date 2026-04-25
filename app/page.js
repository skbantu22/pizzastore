import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import BottomSection from "./components/Footer ";
import BuildYourWay from "./components/Info";
import MealBuilder from "./components/big";
import Big2 from "./components/big2";

export default function Home() {
  return (
    <div>
      {" "}
      <Navbar />
      <Hero />
      <BuildYourWay />
      <MealBuilder />
      <Big2 />
      <BottomSection />
    </div>
  );
}
