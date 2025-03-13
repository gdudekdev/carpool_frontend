import { Link } from "react-router-dom";

const Nav = () => {
  console.log("Rendering Nav");
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__header">
          <div className="navbar__back">
            <Link to="/profil" className="navbar__back-cta">
              <img src="/img/profil/cta/right-arrow.svg" alt="Flèche gauche " />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;