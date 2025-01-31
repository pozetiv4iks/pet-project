import Image from "next/image";
import styles from "./page.module.css";
import '@fontsource/jost/400.css'; 
import '@fontsource/jost/700.css'; 
import Link from "next/link";
import logo from "./icons/logo.png"
import userImg from "./icons/userIMG.png";
import BitPhone from "./icons/BitPhone.png";
import nftImg from "./icons/NFT.png";
import bankPhone from "./icons/bankPhone.png";
import miner from "./icons/miner.png";
import "./globals.css";

export default function Home() {

  
  return (
    <div className={styles.content}>
      <div className={styles.headerBg}></div>
      <div className={styles.infoBlockBg}></div>
      <div className={styles.howDoeskBg}></div>
      <div className={styles.footerBg}></div>
      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.image}>
              <Image className={styles.titleLogo} src={logo}
               alt="Logo"
               width={70}
               height={70}
               
               />
            </div>
            <div className={styles.name}><span className={styles.cryptoNameLogo}>Cryptogram</span></div>
          </div>
          <div className={styles.navigation}>
            <div className={styles.about}>About</div>
            <div className={styles.howDoes}><a href="#howBlock">How does it work?</a></div>
            <div className={styles.contacts}><a href="#footer">Contacts</a></div>
          </div>
          <div className={styles.userImage}>
            <Link href="/login">
              <Image className={styles.userImg} src={userImg} 
              alt="User"
              width={60}
              height={60}
              />
            </Link>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.block1}>
            <span className={styles.infoText}> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
          </div>
          <div className={styles.block2}>
            <span className={styles.infoText}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
          </div>
          <div className={styles.block3}>
            <span className={styles.infoText}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
          </div>
        </div>
        <div id="howBlock" className={styles.howItWorks}>
          <div className={styles.HowWorkTxt}>
            <span className={styles.howTxt}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
          </div>
          <div className={styles.picBg}>
            <div className={styles.BitPhone}>
              <Image src={BitPhone}
                alt="BitPhone"
                width={368}
                height={333}
              />
            </div>
            <div className={styles.miner}>
              <Image src={miner}
                alt="Miner"
                width={368}
                height={368}
              />
            </div>
            <div className={styles.nft}>
            <Image src={nftImg}
              alt="Nft"
              width={368}
              height={207}
              />
            </div>
            <div className={styles.bankPhone}>
            <Image src={bankPhone}
              alt="bankphone"
              width={368}
              height={327}
              />
            </div>
          </div>
        </div>
        <div id="footer" className={styles.footer}>
          <span className={styles.footertxt}>create by Pozetiv4ik</span>
        </div>
      </div>
    </div>
  );
}
