import { Helmet } from "react-helmet-async";

const Seo = ({ title, description, url, children }) => {
  return (
    <Helmet>
      <title>
        {title || "Visiocraft | Web Design & Frontend Development Agency"}
      </title>
      <meta
        name="description"
        content={
          description ||
          "Visiocraft is a leading web design and frontend development agency specializing in creating stunning websites and user experiences with modern technologies like React."
        }
      />
      <meta
        name="keywords"
        content="Visiocraft, web design, frontend development, React development, user experience, UI/UX design, website design, digital agency"
      />
      <meta name="author" content="Visiocraft" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta
        property="og:title"
        content="Visiocraft | Web Design & Frontend Development Agency"
      />
      <meta
        property="og:description"
        content="Visiocraft offers professional web design and frontend development services. We create visually stunning websites with excellent user experiences using modern tools like React."
      />
      <meta property="og:image" content="/thumb.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:url"
        content={url || "https://visiocraft.netlify.app"}
      />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Visiocraft | Web Design & Frontend Development Agency"
      />
      <meta
        property="twitter:description"
        content="Visiocraft specializes in creating stunning websites and seamless frontend development with React. Discover our professional web design services."
      />
      <meta property="twitter:image" content="/visiocraft-twitter-image.jpg" />
      <meta property="twitter:image:width" content="1200" />
      <meta property="twitter:image:height" content="600" />
      {children}
    </Helmet>
  );
};

export default Seo;
