import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './SideBar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/RouteConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggle}
                className={styles.collapseBtn}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={styles.item}>
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>Home</span>
                </AppLink>

                <div>
                    <AppLink
                        className={styles.item}
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.about}
                    >
                        <AboutIcon className={styles.icon} />
                        <span className={styles.link}>About</span>
                    </AppLink>
                </div>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher shot={collapsed} className={styles.lang} />
            </div>
        </div>
    );
};
