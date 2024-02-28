import { Hero } from "@/components/UA/Hero/Hero";
import { Map } from "@/components/UA/Map/Map";
import { Schedule } from "@/components/UA/Schedule/Schedule";
import { Servise } from "@/components/UA/Servise/Servise";

export default function Home() {
  return (
    <>
      <Hero />
      <Servise />
      <Map/>
      <Schedule/>

    </>
  );
}
