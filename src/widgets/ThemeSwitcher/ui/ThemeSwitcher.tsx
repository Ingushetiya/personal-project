import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/Providers/ThemeProvider';

import DarkIcon from 'shared/assets/icons/themedark.svg';
import LightIcon from 'shared/assets/icons/themelight.svg';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
export interface ThemeSwitcherProps {
    className?: string;
}
const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
