"use client";

import { HeroEn } from "@/components/EN/HeroEn/HeroEn";
import { Advertisement } from "@/components/EN/Advertisement/Advertisement";
import { Linck } from "@/components/Linck/Linck";
import { Location } from "@/components/EN/Location/Location";
import { Map } from "@/components/EN/Map/Map";
import { Schedule } from "@/components/EN/Schedule/Schedule";
import { Servise } from "@/components/EN/Servise/Servise";
import { Modal } from "@/components/Modal/Modal";
import { useState } from "react";
import { ModalContent } from "@/components/EN/ModalComponent/ModalContent";

export default function En() {
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
      <HeroEn />
      <Servise />
      <Advertisement />
      <Location />
      <Map />
      <Schedule />
      <Linck />
    </>
  );
}
