import styles from "./header.module.css"
import rocketSvG from "../assets/rocket.svg"
export default function Header() {
    return <header className={styles.header}>
        <img
            src={rocketSvG}
            alt="logo"
        />
        <p>to<span>do</span></p></header>
}