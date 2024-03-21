import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
  lng: "en", 
  fallbackLng: "en", 
  interpolation: {
    escapeValue: false,
  },
  resources: { 
    en: {
      translation: {
        title: "Ankush vishwakarma",
        label: "Dashboard",
        about: "Uaers",
        home: "Products",
        user: "Order"
      },
    },
    es: {
      translation: {
        title: "Aplicación en varios idiomas",
        label: "Selecciona otro lenguaje!",
        about: "Sobre mí",
        home: "Inicio",
        user: "Mi nombre es: {{name}}"
      },
    },
    it: {
      translation: {
        title: "Applicazione multilingue",
        label: "Selezionare un'altra lingua ",
        about: "Su di me",
        home: "Casa",
        user: "Mi chiamo: {{name}}"
      },
    },
    hi: {
        translation: {
          title: "अंकुश विश्वकर्मा ",
          label: "डैशबोर्ड",
          about: "उपयोगकर्ता ",
          home: "उत्पाद",
          user: "आदेश",
          Delivery:"वितरण",
          Stats:"आँकड़े",
          Notifications:"सूचनाएं",
          SystemHealth:"सिस्टम स्वास्थ्य",
          Logs:"लॉग्स",
          Settings:"समायोजन",
          Profile:"प्रोफ़ाइल",
          Logout:"लॉग आउट",





        },
      },
  },
});

export default i18n;