import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss';
export interface INotFoundPageProps {
    className?: string;
}
const NotFoundPage = ({ className }: INotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.NotFound, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFoundPage;
