import WhyNova from "@/components/WhyNova";
import Landing from "@/components/Landing";
import SportsSection from "@/components/SportsSection";
import Steps from "@/components/Steps";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <link rel="icon" href="/nova-favicon.ico" />
        </Head>
      </div>
      <div>
        <Landing />
        <SportsSection />
        <WhyNova />
        <Steps />
      </div>
    </>
  );
}
