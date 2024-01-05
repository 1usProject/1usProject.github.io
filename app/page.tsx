"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect, Fragment, MouseEvent } from "react";
import { getPreferredColorScheme, applyPreferredColorScheme, toggleColorScheme } from './theme.js';
import { IonIcon } from "@ionic/react";
import { Popover, MenuList, MenuItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import { logoGithub, logoTwitter, logoDiscord, logoInstagram, batteryChargingOutline, chevronDownOutline, volumeHigh, bluetooth, wifi } from  "ionicons/icons";

export default function Home() {

  const [isDesktop, setIsDesktop] = useState(true);
  const [showDyland, setShowDyland] = useState(true);

  const [dylandElement, setDylandElement] = useState("Welcome to the Dyland!");
  const [clock, setClock] = useState("");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuopen = Boolean(anchorEl);
  const handleMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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

useEffect(() => {
  applyPreferredColorScheme(getPreferredColorScheme());
}, []);

const [topbarmenu, setTopBarMenu] = useState(<MenuList className={styles.descriptionMenu} />);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
          {!isDesktop ? 
          <div className={styles.descriptionBar}>
            <p>Coming Soon. Stay Tuned.</p>
          </div> : 
          <div className={styles.descriptionDesk}>
            <a  
            aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>About 1us</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>System Settings</ListItemText>
                <Typography variant="body2">
                  ⌘R
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Shut Down</ListItemText>
                <Typography variant="body2">
                  ⌘S
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Logout User</ListItemText>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}}
            rel="noopener noreferrer">1us</a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>New Window</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>New Tab</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>New File</ListItemText>
                <Typography variant="body2">
                  ⌘N
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>New Folder</ListItemText>
                <Typography variant="body2">
                  ⌘W
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Open</ListItemText>
                <Typography variant="body2">
                  ⌘O
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Rename</ListItemText>
                <Typography variant="body2">
                  ⌘R
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Compress</ListItemText>
                <Typography variant="body2">
                  ⌘Z
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Find</ListItemText>
                <Typography variant="body2">
                  ⌘F
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Share</ListItemText>
                <Typography variant="body2">
                  ⌘S
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Get Info</ListItemText>
                <Typography variant="body2">
                  ⌘I
                </Typography>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer">File</a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Undo</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Redo</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Copy</ListItemText>
                <Typography variant="body2">
                  ⌘C
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Cut</ListItemText>
                <Typography variant="body2">
                  ⌘X
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Paste</ListItemText>
                <Typography variant="body2">
                  ⌘V
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Select All</ListItemText>
                <Typography variant="body2">
                  ⌘A
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Show Clipboard</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>AutoFill</ListItemText>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer">Edit</a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>as Icons</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>as Gallary</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>as List</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>as Columns</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Sort by</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Clean up</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Hide Tab Bar</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Show All Tabs</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Show View Options</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Full Screen Mode</ListItemText>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer">View</a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Back</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Forward</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Recents</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Home</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Documents</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Desktop</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Network</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>1usShare</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>1usCloud</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Connect to Network Server</ListItemText>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer">Go</a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Minimize window</ListItemText>
                <Typography variant="body2">
                  ⌘M
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Resize window</ListItemText>
                <Typography variant="body2">
                  ⌘R
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Maximize window</ListItemText>
                <Typography variant="body2">
                  ⌘M + X
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Tile window to left</ListItemText>
                <Typography variant="body2">
                  ⌘T + L
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Tile window to center</ListItemText>
                <Typography variant="body2">
                  ⌘T + C
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Tile window to right</ListItemText>
                <Typography variant="body2">
                  ⌘T + R
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Move to Display 2</ListItemText>
                <Typography variant="body2">
                  ⌘D + Up
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Close window</ListItemText>
                <Typography variant="body2">
                  ⌘Q
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Bring to front</ListItemText>
                <Typography variant="body2">
                  ⌘F
                </Typography>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer">Window</a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>About 1us</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Community</ListItemText>
                <Typography variant="body2">
                  ⌘R
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Documentation</ListItemText>
                <Typography variant="body2">
                  ⌘S
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Official Website</ListItemText>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer">Help</a>
          </div>
          }

          {showDyland ? 
          <div className={styles.dyLand}>
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
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <ListItemText className={styles.descriptionMenuTitle}>WiFi</ListItemText>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}><IonIcon icon={wifi} /><p style={{display:"unset",fontSize: ".75rem"}}>7 </p>ASUS Mesh</ListItemText>
                <Typography variant="body2">WPA3/6GHz</Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}><IonIcon icon={wifi} /><p style={{display:"unset",fontSize: ".75rem"}}>6 </p>Starbucks Free WiFi</ListItemText>
                <Typography variant="body2">Public/5GHz</Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}><IonIcon icon={wifi} /><p style={{display:"unset",fontSize: ".75rem"}}>4 </p>Marcus's iPhone</ListItemText>
                <Typography variant="body2">WPA2/2.4GHz</Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}><IonIcon icon={wifi} />Other...</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Manage WiFi Settings</ListItemText>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer" className={styles.descriptionDeskIcon}><IonIcon icon={wifi} /></a>
            <a href="#" rel="noopener noreferrer" className={styles.descriptionDeskIcon}><IonIcon icon={bluetooth} /></a>
            <a href="#" rel="noopener noreferrer" className={styles.descriptionDeskIcon}><IonIcon icon={volumeHigh} /></a>
            <a onClick={toggleColorScheme} rel="noopener noreferrer" className={styles.descriptionDeskIcon}><IonIcon icon={chevronDownOutline} /></a>
            <a href="#" rel="noopener noreferrer" className={styles.descriptionDeskIcon}><p style={{fontSize:"18px"}}>100%</p><IonIcon icon={batteryChargingOutline} /></a>
            <a href="#" rel="noopener noreferrer">{clock}</a>
          </div>
          }


      <Popover 
      id="topbar-menu"
      className={styles.descriptionMenuPopover}
      open={menuopen}
      anchorEl={anchorEl}
      onClose={handleMenuClose}
      anchorOrigin={{
       vertical: 'bottom',
       horizontal: 'left',
      }}
      transformOrigin={{
       vertical: 'top',
       horizontal: 'left',
      }}>
        {topbarmenu}
      </Popover>
        
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
