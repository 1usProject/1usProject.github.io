"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { IonIcon } from "@ionic/react";
import { logoGithub, logoTwitter, logoDiscord, logoInstagram } from  "ionicons/icons";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Coming Soon. Stay Tuned.
        </p>
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
        </div>
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
