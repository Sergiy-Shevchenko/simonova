"use client";

import { Advertisement } from "@/components/UA/Advertisement/Advertisement";
import { Hero } from "@/components/UA/Hero/Hero";
import { Linck } from "@/components/UA/Linck/Linck";
import { Location } from "@/components/UA/Location/Location";
import { Map } from "@/components/UA/Map/Map";
import { Schedule } from "@/components/UA/Schedule/Schedule";
import { Servise } from "@/components/UA/Servise/Servise";
import { Notify } from "@/components/UA/Notify/Nitify";
import { Modal } from "@/components/Modal/Modal";
import { useState } from "react";
import { ModalContent} from "@/components/UA/ModalComponent/ModalContent";

export default function Home() {
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
      <Hero />
      <Servise />
      <Advertisement />
      <Location />
      <Map />
      <Schedule />
      <Linck />
      <Notify />
    </>
  );
}
