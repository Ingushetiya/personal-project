import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Applink.module.scss';
export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}
interface AppLinkProps {
    className?: string;
    to: string;
    children?: React.ReactNode;
    theme?: AppLinkTheme;
}
const AppLink: FC<AppLinkProps> = props => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
    return (
        <Link to={to} className={classNames('', {}, [className, styles[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};

export default AppLink;
