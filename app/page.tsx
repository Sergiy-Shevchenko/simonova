import { Advertisement } from "@/components/UA/Advertisement/Advertisement";
import { Hero } from "@/components/UA/Hero/Hero";
import { Linck } from "@/components/UA/Linck/Linck";
import { Location } from "@/components/UA/Location/Location";
import { Map } from "@/components/UA/Map/Map";
import { Schedule } from "@/components/UA/Schedule/Schedule";
import { Servise } from "@/components/UA/Servise/Servise";
import { Notify } from "@/components/UA/Notify/Nitify";
import { Modal } from "@/components/Modal/Modal";





export default function Home() {
  
  return (
    <>  
      <Modal/>
      <Hero />
      <Servise />
      <Advertisement/>
      <Location/>
      <Map/>
      <Schedule/>
      <Linck/>    
      <Notify/>
      {/* <ToastContainer/> */}
    </>
  );
}
