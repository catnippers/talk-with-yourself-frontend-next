import { memo } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  readonly text?: string;
  readonly type?: 'submit' | 'reset' | 'button';
  readonly onClick?: () => void;
};

export const Button = memo<ButtonProps>(({ text, type, onClick }) => {
  return (
    <button type={type || 'submit'} onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
});

Button.displayName = 'MainButton';
