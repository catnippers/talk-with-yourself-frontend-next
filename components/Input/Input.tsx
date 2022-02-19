import classnames from 'classnames';
import { memo, useRef, useState } from 'react';
import type { TextInputProps } from '../../types';
import styles from './Input.module.scss';

export const Input = memo<TextInputProps>(
  ({ type = 'text', name, error, onChange, value, placeholder, shouldBeFocused = false }) => {
    const [isInputFocused, setIsInputFocused] = useState(shouldBeFocused);

    const input = useRef<HTMLInputElement | null>(null);

    return (
      <div className={styles.field}>
        <label htmlFor={name} className={styles.wrapper}>
          <span className={styles.span}>{placeholder}</span>
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className={styles.input}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            autoComplete={type === 'password' ? 'off' : 'on'}
          />
        </label>
        {error ? <span className={styles.error}>{error}</span> : null}
      </div>
    );
  },
);

Input.displayName = 'Input';
