import { type Metadata } from "next";

import Nav from "components/nav";
import About from "components/about";
// import Projects from "components/projects";
import Skills from "components/skills";
// import Form from "components/form";
import Footer from "components/footer";

export const metadata: Metadata = {
  title: "Valentino Andric",
  description: "Portfolio website of Valentino Andric",
  keywords: "portfolio, valentino andric, andric",
  authors: [{ name: "Valentino Andric", url: "https://valentinoandric.nl" }],
  creator: "Valentino Andric",
  publisher: "Valentino Andric",
};

export default function Home() {
  return (
    <>
      <main>
        <Nav />
        <About />
        {/* <Projects /> */}
        <Skills />
        {/* <Form /> */}
        <Footer />
      </main>
    </>
  );
}
