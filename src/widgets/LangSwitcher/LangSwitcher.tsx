import { classNames } from 'shared/lib/classNames/classNames';

import styles from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
export interface LangSwitcherProps {
    className?: string;
    shot?: boolean;
}
const LangSwitcher = ({ className, shot }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames(styles.LangSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(shot ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};

export default LangSwitcher;
