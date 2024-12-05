import WhyNova from "@/components/WhyNova";
import Landing from "@/components/Landing";
import SportsSection from "@/components/SportsSection";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <>
      <div>
        <Landing />
        <SportsSection />
        <WhyNova />
        <Steps />
      </div>
    </>
  );
}
