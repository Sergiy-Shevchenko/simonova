import Link from "next/link";
import Image from "next/image";

import Phone from "../../../public/phone-icon.png";
import Viber from "../../../public/viber-icon1.png";
import Telegram from "../../../public/telegram.png";
import Email from "../../../public/mail.png";
import Whatsapp from "../../../public/whatsapp-icon.png";

import styles from "../../Styles/Linck.module.css";


const lincks = [
  { id: "1", name: "phone", icon: `/${Phone}`, linck: "tel:+380960051155" },
  {
    id: "2",
    name: "viber",
    icon: `/${Viber}`,
    linck: "viber://chat?number=%2B380960051155",
  },
  {
    id: "3",
    name: "telegram",
    icon: `/${Telegram}`,
    linck: "https://t.me/simonova_notary",
  },
  { id: "4", name: "watsap", icon: "", linck: "https://wa.me/380960051155" },
  { id: "5", name: "mail", icon: "", linck: "mailto:simonova.w78@ukr.net" },
];

const Linck = ({}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li>
            <Link href="tel:+380960051155">
              <Image className={styles.icon} src={Phone} alt="phone" />
            </Link>
          </li>
          <li>
            <Link href="viber://chat?number=%2B380960051155">
              {" "}
              <Image className={styles.icon} src={Viber} alt="viber" />
            </Link>
          </li>
          <li>
            <Link href="https://t.me/simonova_notary">
              {" "}
              <Image className={styles.icon} src={Telegram} alt="telegram" />
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/380960051155">
              {" "}
              <Image className={styles.icon} src={Whatsapp} alt="Whatsapp" />
            </Link>
          </li>
          <li>
            <Link href="mailto:simonova.w78@ukr.net">
              {" "}
              <Image className={styles.icon} src={Email} alt="email" />
            </Link>
          </li>

          {/* {lincks.map(({id, icon, linck }) => (
            <li className={styles.item} key={id}>
          
              <Link href={linck}>
                <Image 
                src={icon} 
                alt='icon'
                width={24}
                height={24}/>
                </Link>
            </li>
          ))} */}
        </ul>
      </div>
    </section>
  );
};

export { Linck };
