import FeatherIcon from "@/components/Icons/FeatherIcon";
import styles from "@/components/Styles/Servise.module.css";

const servises = [
  { id: "1", name: "Drafting contracts" },
  { id: "2", name: "Power of attorney execution" },
  { id: "3", name: "Statement drafting" },
  { id: "4", name: "Inheritance formalization" },
  { id: "5", name: "Wills drafting" },
  { id: "6", name: "Signature notarization" },
  { id: "7", name: "Certification of copies" },
  { id: "8", name: "Real estate re-registration" },
  { id: "9", name: "State registration" },
  { id: "10", name: "Notarization of agricultural receipts" },
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
