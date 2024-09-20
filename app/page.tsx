import WhyNova from "@/components/WhyNova";
import Landing from "@/components/Landing";
import SportsSection from "@/components/SportsSection";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <>
      <h1>
        <Landing />
        <SportsSection />
        <WhyNova />
        <Steps />
      </h1>
    </>
  );
}
