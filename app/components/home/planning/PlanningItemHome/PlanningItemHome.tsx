import BtnPrimary from "~/components/main/button/BtnPrimary/BtnPrimary";
import CtaVerticalDots from "~/src/assets/icon/cta/CtaVerticalDots";

interface PlanningItemProps {
  time: string;
  direction: string;
  onClickModal: () => void;
  onClickChoice: () => void;
}

const PlanningItem: React.FC<PlanningItemProps> = ({ time, direction, onClickModal, onClickChoice }) => (
      <div className={`home__item ${direction.includes("Travail") ? "travail" : "domicile"}`}>
        <div className="home__item-main">
          <div className="home__item-main-container">
            <div className="home__item-departure">
              <p>{time}</p>
            </div>
            <div className="home__item-direction">
              <p>{direction}</p>
            </div>
          </div>
          <div className="home__item-option" onClick={onClickModal}>
            <CtaVerticalDots />
          </div>
        </div>
        <div className="home__item-cta" onClick={onClickChoice}>
          <BtnPrimary txt="Voir le conducteur disponible" path="#" />
        </div>
      </div>
    );
export default PlanningItem;