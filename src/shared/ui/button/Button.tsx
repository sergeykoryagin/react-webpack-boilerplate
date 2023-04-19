import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

interface Props {
    className?: string;
}
export const Button: FC<PropsWithChildren<Props>> = ({
    className,
    children,
}) => (
    <button type='button' className={cn(styles.Button, className)}>
        {children}
    </button>
);
