"use client";

import { HeroRu } from "@/components/RU/HeroRu/HeroRu"
// import { Metadata } from "next"



import { Advertisement } from "@/components/RU/Advertisement/Advertisement";

import { Linck } from "@/components/Linck/Linck";
import { Location } from "@/components/RU/Location/Location";
import { Map } from "@/components/RU/Map/Map";
import { Schedule } from "@/components/RU/Schedule/Schedule";
import { Servise } from "@/components/RU/Servise/Servise";
import { Modal } from "@/components/Modal/Modal";
import { useState } from "react";
import { ModalContent} from "@/components/RU/ModalComponent/ModalContent";






// export const metadata: Metadata = {
//     title:"НОТАРИУС Симонова Виктория",
//     description:"нотариус симонова виктория валериевна"
// }

export default function Ru() {
    const [showModal, setShowModal] = useState(true);
    return (
        <>
        <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalContent />
      </Modal>
        <HeroRu/>
        <Servise />
      <Advertisement />
      <Location />
      <Map />
      <Schedule />
      <Linck />
        </>
        
    )
}