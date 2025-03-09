import { Link, useLocation } from "react-router-dom";
import Container from "../container/Container";
import { motion } from "framer-motion";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <nav className="footer__nav">
        <Container>
          <ul className="footer__nav-list">
            <motion.li
              className={`footer__nav-list-link ${
                location.pathname === "/chat" ? "footer__active" : ""
              }`}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <Link to="/chat">
                <svg
                  width="48px"
                  height="48px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 9H17M7 13H12M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.li>
            <motion.li
              className={`footer__nav-list-link ${
                location.pathname === "/home" ? "footer__active" : ""
              }`}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <Link to="/home">
                <svg
                  fill="#000000"
                  height="48px"
                  width="48px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512.001 512.001"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <g>
                        <path
                          d="M304.427,147.399H275.38v-29.046c0-10.706-8.68-19.386-19.386-19.386c-10.706,0-19.386,8.68-19.386,19.386V147.4h-29.047
                c-10.706,0-19.386,8.68-19.386,19.386s8.68,19.386,19.386,19.386h29.047v29.046c0,10.706,8.68,19.386,19.386,19.386
                c10.706,0,19.386-8.68,19.386-19.386v-29.046h29.047c10.706,0,19.386-8.68,19.386-19.386
                C323.813,156.079,315.135,147.399,304.427,147.399z"
                        />
                        <path
                          d="M446.704,19.386C446.704,8.68,438.024,0,427.318,0H84.672C73.966,0,65.286,8.68,65.286,19.386
                c0,19.634-0.004,395.991-0.004,415.78c0,10.706,8.68,19.386,19.386,19.386h56.06v38.045c0,17.236,20.909,25.888,33.091,13.71
                l33.746-33.736l33.735,33.733c12.109,12.114,33.094,3.665,33.094-13.707v-38.045h152.938c10.706,0,19.386-8.68,19.386-19.386
                C446.72,423.13,446.704,234.426,446.704,19.386z M104.059,38.773h303.873v256.026H104.059V38.773z M235.623,445.793
                l-14.346-14.345c-7.568-7.571-19.842-7.571-27.413-0.003l-14.363,14.357c0-22.535,0-29.22,0-51.734h56.122
                C235.623,416.595,235.623,423.285,235.623,445.793z M407.947,415.78H274.395v-21.714h94.993c10.706,0,19.386-8.68,19.386-19.386
                c0-10.706-8.68-19.386-19.386-19.386H142.614c-10.706,0-19.386,8.68-19.386,19.386c0,10.071,7.68,18.342,17.501,19.291v21.81
                h-36.674v-82.207h303.892V415.78z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>
            </motion.li>
            <motion.li
              className={`footer__nav-list-link ${
                location.pathname === "/profil" ? "footer__active" : ""
              }`}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <Link to="/profil">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48px"
                  height="48px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </Link>
            </motion.li>
          </ul>
        </Container>
      </nav>
    </footer>
  );
};

export default Footer;
