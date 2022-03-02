import Link from 'next/link';
import { memo, useRef } from 'react';
import type { TextInputProps } from '../../types';
import styles from './Input.module.scss';

export const Input = memo<TextInputProps>(
  ({ type = 'text', name, error, onChange, value, placeholder, inputRef }) => {
    const input = useRef<HTMLInputElement | null>(null);

    return (
      <div className={styles.field}>
        <label htmlFor={name} className={styles.wrapper}>
          <div className={styles.placeholder}>
            <span>{placeholder}</span>
            {placeholder?.includes('Password') ? (
              <Link href="#">
                <p>Forgot password?</p>
              </Link>
            ) : null}
          </div>
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
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
