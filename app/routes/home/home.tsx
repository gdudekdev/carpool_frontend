import { useState } from "react";
import HomeOverlayChoice from "~/components/home/overlay/HomeOverlayChoice/HomeOverlayChoice";
import HomeOverlayTrajet from "~/components/home/overlay/HomeOverlayTrajet/HomeOverlayTrajet";
import ModalHomeTrajet from "~/components/home/modal/modalHomeTrajet/ModalHomeTrajet";
import HomeSection from "~/components/home/sections/HomeSection";
import PlanningHome from "~/components/home/planning/PlanningHome/PlanningHome";
import SectionHome from "~/components/home/import/ImportSectionHome";

const Home = () => {
  const [isOverlayTrajetVisible, setIsOverlayTrajetVisible] = useState(false);
  const [isOverlayChoiceVisible, setIsOverlayChoiceVisible] = useState(false);
  const [isModalHomeTrajetVisible, setIsModalHomeTrajetVisible] =
    useState(false);

  return (
    <div className="home">
      {SectionHome.map((section, index) => (
        <HomeSection key={index} section={section} />
      ))}
      <PlanningHome
        onClickTrajet={() => setIsOverlayTrajetVisible(true)}
        onClickModal={() => setIsModalHomeTrajetVisible(true)}
        onClickChoice={() => setIsOverlayChoiceVisible(true)}
      />
      {isOverlayTrajetVisible && (
        <HomeOverlayTrajet
          onCloseCalendar={() => setIsOverlayTrajetVisible(false)}
        />
      )}
      {isOverlayChoiceVisible && (
        <HomeOverlayChoice
          onCloseChoice={() => setIsOverlayChoiceVisible(false)}
        />
      )}
      {isModalHomeTrajetVisible && (
        <ModalHomeTrajet
          onCloseModalHomeTrajet={() => setIsModalHomeTrajetVisible(false)}
        />
      )}
    </div>
  );
};

export default Home;
