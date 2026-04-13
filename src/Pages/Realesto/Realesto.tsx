import R_Cards from "../../Sections/R_Cards/R_Cards";
import R_PanaromaCard from "../../Sections/R_PanaromaCard/R_PanaromaCard";
import R_Render from "../../Sections/R_Render/R_Render";
import Contact from "../../Sections/Contact/Contact";
import R_Hero from "../../Sections/R_Hero/R_Hero";

const Realesto = () => {
  return (
    <main>
      <R_Hero />
      <R_Render />
      <R_PanaromaCard />
      <R_Cards />
      <Contact />
    </main>
  );
};

export default Realesto;
