import FeatherIcon from "@/components/Icons/FeatherIcon";
import styles from "@/components/Styles/Servise.module.css";

const servises = [
  { id: "1", name: "Оформлениe договоров" },
  { id: "2", name: "Оформление доверенностей" },
  { id: "3", name: "Оформление заявлений" },
  { id: "4", name: "Оформление наследства" },
  { id: "5", name: "Оформление завещаний" },
  { id: "6", name: "Заверение подписей" },
  { id: "7", name: "Заверение копий" },
  { id: "8", name: "Переоформление недвижимости" },
  { id: "9", name: "Государственная регистрация" },
  { id: "10", name: "Заверение аграрных расписок" },
];

const Servise = ({}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {servises.map(({ id, name }) => (
            <li className={styles.item} key={id}>
              <FeatherIcon />
              <p className={styles.text}>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Servise };
