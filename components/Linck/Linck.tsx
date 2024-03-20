import Link from "next/link";
import Image from "next/image";

import Phone from "@/public/phone-icon.png";
import Viber from "@/public/viber-icon.png";
import Telegram from "@/public/telegram-icon.png";
import Email from "@/public/mail-icon.png";
import Whatsapp from "@/public/whatsapp-icon.png";

import PhoneSvg from '@/public/phone-call.svg';
import ViberSvg from '@/public/viber-svg.svg';
import TelegramSvg from '@/public/telegram-svg.svg';
import WhatsappSvg from '@/public/whatsapp-svg.svg';
import EmailSvg from '@/public/email-svg.svg'

import styles from "@/components/Styles/Linck.module.css";

const Linck = ({}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="tel:+380960051155">
            {" "}
              <Image className={styles.icon} src={Phone} alt="phone" />
              <PhoneSvg className={styles.icon__svg}/>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="viber://chat?number=%2B380960051155">
              {" "}
              <Image className={styles.icon} src={Viber} alt="viber" />
              <ViberSvg className={styles.icon__svg}/>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="https://t.me/simonova_notary">
              {" "}
              <Image className={styles.icon} src={Telegram} alt="telegram" />
              <TelegramSvg className={styles.icon__svg}/>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="https://wa.me/380960051155">
              {" "}
              <Image className={styles.icon} src={Whatsapp} alt="Whatsapp" />
              <WhatsappSvg className={styles.icon__svg}/>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="mailto:simonova.w78@ukr.net">
              <EmailSvg className={styles.icon__svg}/>
              {" "}
              <Image className={styles.icon} src={Email} alt="email" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Linck };
