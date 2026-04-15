import R_Cards from "../../Sections/R_Cards/R_Cards";
import R_PanaromaCard from "../../Sections/R_PanaromaCard/R_PanaromaCard";
import R_Render from "../../Sections/R_Render/R_Render";
import Contact from "../../Sections/Contact/Contact";
import R_Hero from "../../Sections/R_Hero/R_Hero";
import { Helmet } from "react-helmet-async";

const Realesto = () => {
  return (
    <>
      <Helmet>
        <title>
          3D Virtual Tour Software for Real Estate in Bangalore | Realesto
        </title>

        <meta
          name="description"
          content="Boost real estate sales with immersive 3D virtual tours. Help builders and agents showcase properties online and close deals faster. Book a free demo today."
        />

        <meta
          name="keywords"
          content="3D virtual tour real estate, property walkthrough software, real estate 3D visualization, virtual property tour India, real estate marketing tools, 3D tour for builders, virtual property tour in bangalore"
        />

        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="3D Virtual Tour Platform for Real Estate in bangalore"
        />
        <meta
          property="og:description"
          content="Showcase properties with immersive 3D tours and increase conversions."
        />
        <meta
          property="og:image"
          content="https://www.matlam.online/realesto.png"
        />
        <meta property="og:url" content="https://www.matlam.online/realesto" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.matlam.online/realesto" />
      </Helmet>
      <main>
        <R_Hero />
        <R_Render />
        <R_PanaromaCard />
        <R_Cards />
        <Contact />
      </main>
    </>
  );
};

export default Realesto;
