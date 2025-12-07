import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Главная страница')}
            {t('welcome')}
        </div>
    );
};

export default MainPage;
