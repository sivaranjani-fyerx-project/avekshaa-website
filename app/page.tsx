import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import TrustedBy from "@/sections/TrustedBy";
import Stats from "@/sections/Stats";
import WhatWeDo from "@/sections/WhatWeDo";
import PassPlatform from "@/sections/PassPlatform";
import Industries from "@/sections/Industries";
import Recognition from "@/sections/Recognition";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Faq from "@/sections/Faq";
import CtaBanner from "@/sections/CtaBanner";
import BottomBar from "@/sections/BottomBar";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Stats />
        <WhatWeDo />
        <PassPlatform />
        <Industries />
        <Recognition />
        <WhyChooseUs />
        <Faq />
        
      </main>
      <Footer />
      <BottomBar />
    </div>
  );
}
