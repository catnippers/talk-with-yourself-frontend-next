import { memo, useRef, useState } from 'react';
import type { TextInputProps } from '../../types';
import styles from './Input.module.scss';

export const Input = memo<TextInputProps>(
  ({ type = 'text', name, error, onSubmit, value, placeholder, inputRef }) => {
    const [inputType, setInputType] = useState(type);

    const input = useRef<HTMLInputElement | null>(null);

    return (
      <div className={styles.field}>
        <label htmlFor={name} className={styles.wrapper}>
          <span className={styles.span}>{placeholder}</span>
          {placeholder?.includes('Password') ? <a href="#">Forgot password?</a> : null}
          <input
            type={inputType}
            name={name}
            id={name}
            value={value}
            onSubmit={onSubmit}
            ref={(e) => {
              inputRef!(e);
              input.current = e;
            }}
            className={styles.input}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </label>
        {error ? <span className={styles.error}>{error}</span> : null}
      </div>
    );
  },
);

Input.displayName = 'Input';
