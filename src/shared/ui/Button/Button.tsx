import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
    ClEAR = 'clear',
    OUTLINE = 'outline',
    PRIMARY = 'primary',
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}
const Button: FC<ButtonProps> = props => {
    const { className, children, theme, ...otherProps } = props;
    return (
        <button
            {...otherProps}
            className={classNames(styles.Button, {}, [className, styles[theme]])}
        >
            {children}
        </button>
    );
};

export default Button;
