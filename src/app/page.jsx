import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/sections/about/main";
import News from "./components/sections/updates/main";
import Research from "./components/sections/research/main";
import Teaching from "./components/sections/teaching/main";
import Skills from "./components/sections/skills/main";

export default function Home() {

  return (
    <div className="flex flex-col items-center min-h-screen w-full ">
      <Header />
      <main className="container mx-auto px-4 md:px-8 flex flex-col items-center sm:items-start xl:max-w-[1280px]">
        <About />
        <News />
        <Research />
        <Teaching />
        
      </main>
      <Footer />
    </div>
  );
}
