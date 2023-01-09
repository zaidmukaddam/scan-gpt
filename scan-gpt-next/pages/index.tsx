import Background from "../components/Background";
import Intro from "../components/Intro";
import Buttons from "../components/Buttons";
import Demo from "../components/Demo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";

export default function Home() {

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <SEO
        title="ScanGPT | Download Extension"
        description="Identify GPT-generated text on any web page with our advanced extension."
        image="https://scangpt.space/og/home-image.png"
        url="https://scangpt.space/"
      />
      <Background theme="dark" />
      <main className="w-full flex flex-col items-center">
        <Header theme="dark" />
        <section className="flex flex-col gap-10 py-20 items-center">
          <Intro />
          <Buttons />
        </section>
        <Demo />
        <Footer theme="dark" />
      </main>
    </div>
  );
}