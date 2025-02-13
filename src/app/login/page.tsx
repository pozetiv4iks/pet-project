import styles from "./page.module.css";
import Image from "next/image";
import logo from "../icons/logo.png";
import '@fontsource/jost/400.css'; 
import '@fontsource/jost/700.css';
import human1 from "./icons/human1.png";
import human2 from "./icons/human2.png";
import strai from "./icons/strai.png";
import dog from "";

export default function Page() {
    return  (
        <div>
            <div className={styles.bodyBg}></div>
            <div className={styles.body}>
                <div className={styles.logo}>
                    <div className={styles.image}>
                        <Image className={styles.titleLogo} src={logo}
                        alt="Logo"
                        width={70}
                        height={70}
                        />
                    </div>
                    <div className={styles.name}>
                        <span className={styles.cryptoNameLogo}>Cryptogram</span>
                    </div>
                </div>
                <div className={styles.picBg}>
                    <div className={styles.human1}>
                    <Image  src={human1}
                        alt="Logo"
                        width={368}
                        height={497}
                        />
                    </div>
                    <div className={styles.human2}>
                    <Image  src={human2}
                        alt="Logo"
                        width={368}
                        height={552}
                        />
                    </div>
                    <div className={styles.firstStrai}>
                    <Image  src={strai}
                        alt="strai"
                        width={368}
                        height={245}
                        />
                    </div>
                    <div className={styles.secondStrai}>
                    <Image  src={strai}
                        alt="strai"
                        width={368}
                        height={245}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.contentTxt}>
                        <span>Login and password</span>
                    </div>
                    <div className={styles.logInputBlock}>
                        <input className={styles.logInput} type="text" placeholder="Login"/>
                    </div>
                    <div className={styles.passInputBlock}>
                        <input className={styles.passInput} type="password" placeholder="Password"/>
                    </div>
                    <div className={styles.logBtn}>
                        <button className={styles.btnLog}>Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}