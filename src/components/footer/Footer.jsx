import Image from "next/image";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Rabodev. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} alt="Rabodev facebook" />
        <Image src="/2.png" width={15} height={15} alt="Rabodev instagram" />
        <Image src="/3.png" width={15} height={15} alt="Rabodev twitter" />
        <Image src="/4.png" width={15} height={15} alt="Rabodev youtube" />
      </div>
    </div>
  );
}
