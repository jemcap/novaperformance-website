import WhyNova from "@/components/WhyNova";
import Landing from "@/components/Landing";
import SportsSection from "@/components/SportsSection";
import Steps from "@/components/Steps";

import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div>
        <Landing />
        <SportsSection />
        <WhyNova />
        <Steps />
        <Testimonials />
      </div>
    </>
  );
}
