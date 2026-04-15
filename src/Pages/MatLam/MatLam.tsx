import { Helmet } from "react-helmet-async";
import Contact from "../../Sections/Contact/Contact";
import Hero from "../../Sections/Hero/Hero";
import Product from "../../Sections/Product/Product";
import Services from "../../Sections/Services/Services";

const MatLam = () => {
  return (
    <>
      <Helmet>
        <title>
          3D interactive web experiences for businesses in Bangalore | Matlam
        </title>
        <meta
          name="description"
          content="From static sites to 3D interactive experiences, we build digital excellence that prioritizes performance, SEO, and immersive user engagement."
        />

        <meta
          name="keywords"
          content="3D interactive web solution in bangalore, 3d walkthrough software in bangalore, 3D visualization in bangalore, 3d marketing tools, 3D tour for builders"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.matlam.online/" />
        <meta
          property="og:title"
          content="3D interactive web experiences for businesses in Bangalore | Matlam"
        />
        <meta
          property="og:description"
          content="From static sites to 3D interactive experiences, we build digital excellence that prioritizes performance, SEO, and immersive user engagement."
        />
        <meta
          property="og:image"
          content="https://www.matlam.online/matlam.png"
        />
        <meta property="og:url" content="https://www.matlam.online/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <main>
        <Hero />
        <Services />
        <Product />
        <Contact />
      </main>
    </>
  );
};

export default MatLam;
