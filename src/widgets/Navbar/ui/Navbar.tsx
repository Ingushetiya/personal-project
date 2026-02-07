import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Navbar.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
interface NavbarProps {
    className?: string;
}
const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.navbar)}>
            <div className={styles.links}>/</div>
        </div>
    );
};

export default Navbar;
