import { useTranslation } from "react-i18next";
import CustomSelectPopup from './customLang';

const Lang = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  const options = [
    { value: 'en', label: 'English' },
    { value: 'bn', label: 'Bangla' },
    // Add more languages here
  ];

  return (
    <div style={{ position: 'relative' }}>
      <CustomSelectPopup
        options={options}
        onSelect={handleLanguageChange}
        currentLanguage={i18n.language}
      />
    </div>
  );
};

export default Lang;
