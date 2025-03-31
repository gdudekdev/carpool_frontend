import IconProfilAttestation from "~/src/assets/icon/profil/sections/IconProfilAttestation";
import IconProfilBlock from "~/src/assets/icon/profil/sections/IconProfilBlock";
import IconProfilCgu from "~/src/assets/icon/profil/sections/IconProfilCgu";
import IconProfilCookies from "~/src/assets/icon/profil/sections/IconProfilCookies";
import IconProfilFaq from "~/src/assets/icon/profil/sections/IconProfilFaq";
import IconProfilHistorique from "~/src/assets/icon/profil/sections/IconProfilHistorique";
import IconProfilInfo from "~/src/assets/icon/profil/sections/IconProfilInfo";
import IconProfilPrivacy from "~/src/assets/icon/profil/sections/IconProfilPrivacy";
import IconProfilStats from "~/src/assets/icon/profil/sections/IconProfilStats";
import IconProfilTrajet from "~/src/assets/icon/profil/sections/IconProfilTrajet";
import IconProfilVehicule from "~/src/assets/icon/profil/sections/IconProfilVehicule";

const sections = [
      {
        title: "Vos trajets",
        items: [
          {
            href: "trajet",
            icon: <IconProfilTrajet />,
            alt: "Horloge",
            title: "Trajet de covoiturage",
          },
          {
            href: "historique",
            icon: <IconProfilHistorique />,
            alt: "Horloge",
            title: "Historique de covoiturage",
          },
          {
            href: "attestation",
            icon: <IconProfilAttestation />,
            alt: "Feuille",
            title: "Attestation de covoiturage",
          },
          {
            href: "vehicule",
            icon: <IconProfilVehicule />,
            alt: "Voiture",
            title: "Véhicule",
            description:
              "Ajoutez-le pour faciliter la rencontre avec vos passagers",
            cta: "Ajouter",
          },
        ],
      },
      {
        title: "Préférences",
        items: [
          {
            href: "info",
            icon: <IconProfilInfo />,
            alt: "Personne",
            title: "Infos personnelles",
          },
          {
            href: "stats",
            icon: <IconProfilStats />,
            alt: "Statistiques",
            title: "Vos statistiques",
          },
          {
            href: "block",
            icon: <IconProfilBlock />,
            alt: "Stop",
            title: "Membres bloqués",
          },
        ],
      },
      {
        title: "Aide",
        items: [
          {
            href: "faq",
            icon: <IconProfilFaq />,
            alt: "Questions",
            title: "Questions fréquentes",
          },
          {
            href: "cgu",
            icon: <IconProfilCgu />,
            alt: "Formulaire",
            title: "Conditions Générales",
          },
          {
            href: "privacy",
            icon: <IconProfilPrivacy />,
            alt: "Cadenas",
            title: "Protection des Données",
          },
          {
            href: "cookies",
            icon: <IconProfilCookies />,
            alt: "Cookie",
            title: "Paramètre des cookies",
          },
        ],
      },
    ];
export default sections;