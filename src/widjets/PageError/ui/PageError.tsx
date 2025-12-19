import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';

import styles from './PageError.module.scss';
interface PageErrorProps {
    error: string;
}
const PageError = () => {
    const reloadPage = () => {
        location.reload;
    };
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.PageError, {}, [])}>
            <p>{t('Произошла ошибка')}</p>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};

export default PageError;
