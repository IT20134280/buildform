import "./App.css";
import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function Home() {
  return (
    <>
      <div className="min-h-screen overflow-hidden">
        {/* NavBar Section */}
        <Navbar />
        <div className="flex flex-col-reverse justify-between items-center mx-auto md:flex-row">
          {/* Hero Section */}
          <div className="w-full md:w-1/2">
            <Hero />
          </div>
          {/* Features Section */}
          <div className="w-full md:w-1/2 duration-[1.2s] opacity-100 md:opacity-100 md:block">
            <Features />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
