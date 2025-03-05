import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-list-link">
            <Link to="/message.php">
              <img src="/img/footer/cta/message-square-lines-svgrepo-com.svg" alt="Messages" />
            </Link>
            <p>Messages</p>
          </li>
          <li className="footer__nav-list-link">
            <Link to="/">
              <img src="/img/footer/cta/appointment-book-svgrepo-com.svg" alt="Planning" />
            </Link>
            <p>Planning</p>
          </li>
          <li className="footer__nav-list-link">
            <Link to="/profil">
              <img src="/img/footer/cta/settings.svg" alt="Paramètres" />
            </Link>
            <p>Paramètres</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}