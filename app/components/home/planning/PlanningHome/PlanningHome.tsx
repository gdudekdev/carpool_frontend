import CtaCalendar from "~/src/assets/icon/home/CtaCalendar";
import PlanningItem from "../PlanningItemHome/PlanningItemHome";

interface PlanningHomeProps {
  onClickTrajet: () => void;
  onClickModal: () => void;
  onClickChoice: () => void;
}

const PlanningHome= ({ onClickTrajet, onClickModal, onClickChoice }: PlanningHomeProps) => (
      <div className="home__planning">
        <div className="home__planning-header">
          <h2>Je recherche un covoitureur</h2>
          <div className="home__planning-header-cta" onClick={onClickTrajet}>
            <CtaCalendar />
          </div>
        </div>
        <div className="home__planning-item">
          <PlanningItem time="7:00" direction="Travail -> Domicile" onClickModal={onClickModal} onClickChoice={onClickChoice} />
          <PlanningItem time="17:00" direction="Domicile -> Travail" onClickModal={onClickModal} onClickChoice={onClickChoice} />
        </div>
      </div>
    );
    export default PlanningHome;