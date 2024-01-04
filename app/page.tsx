"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect, Fragment } from "react";
import { IonIcon } from "@ionic/react";
import { logoGithub, logoTwitter, logoDiscord, logoInstagram, batteryChargingOutline, chevronDownOutline, volumeHigh, bluetooth, wifi } from  "ionicons/icons";

export default function Home() {

  const [isDesktop, setIsDesktop] = useState(true);
  const [showDyland, setShowDyland] = useState(true);

  const [dylandElement, setDylandElement] = useState("Welcome to the Dyland!");
  const [clock, setClock] = useState("");

  useEffect(() => {
  let secTimer = setInterval( () => {
    let date = new Date()
    let weekday_short = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    let month_short = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let formatted_date = weekday_short[date.getDay()] + " " + date.getDate() +  " " + month_short[date.getMonth()] 
    let formatted_time = date.getHours() + ":" + date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2})
    let formatted_clock = formatted_date + " " + formatted_time
    setClock(formatted_clock)
  },1000)

  return () => clearInterval(secTimer);
}, [])

  return (
    <main className={styles.main}>
      <div className={styles.description}>
          {!isDesktop ? 
          <div className={styles.descriptionBar}>
            <p>Coming Soon. Stay Tuned.</p>
          </div> : 
          <div className={styles.descriptionDesk}>
            <a href="#" rel="noopener noreferrer">1us</a>
            <a href="#" rel="noopener noreferrer">File</a>
            <a href="#" rel="noopener noreferrer">Edit</a>
            <a href="#" rel="noopener noreferrer">View</a>
            <a href="#" rel="noopener noreferrer">Go</a>
            <a href="#" rel="noopener noreferrer">Window</a>
            <a href="#" rel="noopener noreferrer">Help</a>
          </div>
          }

          {showDyland ? 
          <div className={styles.descriptionBar} style={{background:"black"}}>
            {dylandElement}
          </div> : 
          <div />
          }

          {!isDesktop ? 
          <div style={{ display:"flex", fontSize:"18px" }}>
          <a
            href="#"
            rel="noopener noreferrer"
            style={{ padding:"0px 6px" }}
          >
            <IonIcon icon={logoDiscord} />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            style={{ padding:"0px 6px" }}
          >
            <IonIcon icon={logoTwitter} />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            style={{ padding:"0px 6px" }}
          >
            <IonIcon icon={logoInstagram} />
          </a>
          <a
            href="https://github.com/1usProject"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding:"0px 6px" }}
          >
            <IonIcon icon={logoGithub} />
          </a>
          </div> : 
          <div className={styles.descriptionDesk}>
            <a href="#" rel="noopener noreferrer" className={styles.descriptionDeskIcon}><IonIcon icon={wifi} /></a>
            <a href="#" rel="noopener noreferrer" className={styles.descriptionDeskIcon}><IonIcon icon={bluetooth} /></a>
            <a href="#" rel="noopener noreferrer" className={styles.descriptionDeskIcon}><IonIcon icon={volumeHigh} /></a>
            <a href="#" rel="noopener noreferrer" className={styles.descriptionDeskIcon}><IonIcon icon={chevronDownOutline} /></a>
            <a href="#" rel="noopener noreferrer" className={styles.descriptionDeskIcon}><p style={{fontSize:"18px"}}>100%</p><IonIcon icon={batteryChargingOutline} /></a>
            <a href="#" rel="noopener noreferrer">{clock}</a>
          </div>
          }
        
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="1us.png"
          alt="1us Logo"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://chatu.1us.ca"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Chatulus <span>-&gt;</span>
          </h2>
          <p>Customizable messaging platform you can trust.</p>
        </a>

        <a
          href="https://reactiveide.com"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            ReactiveIDE <span>-&gt;</span>
          </h2>
          <p>Next-generation IDE. More than just build apps.</p>
        </a>

        <a
          href="https://os.1us.ca"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            1usOS <span>-&gt;</span>
          </h2>
          <p>Customizable next-generation operating system. I use Arch btw.</p>
        </a>

        <a
          href="https://os.1us.ca"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            1usAI <span>-&gt;</span>
          </h2>
          <p>Customizable next-generation AI and LLM (Language Model) APIs.</p>
        </a>

        <a
          href="#"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            What's Next? <span>-&gt;</span>
          </h2>
          <p>
            Tell us your idea if you have an interesting project.
          </p>
        </a>
      </div>
    </main>
  );
}
