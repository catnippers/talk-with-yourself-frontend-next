<<<<<<< HEAD
import classnames from 'classnames';
import { memo, useRef, useState } from 'react';
=======
import { memo, useRef } from 'react';
>>>>>>> fdc1f7c9b5980b5860433f5f2823b113dd095ed2
import type { TextInputProps } from '../../types';
import styles from './Input.module.scss';

export const Input = memo<TextInputProps>(
<<<<<<< HEAD
  ({ type = 'text', name, error, onChange, value, placeholder, shouldBeFocused = false }) => {
    const [isInputFocused, setIsInputFocused] = useState(shouldBeFocused);

=======
  ({ type = 'text', name, error, onChange, value, placeholder, inputRef }) => {
>>>>>>> fdc1f7c9b5980b5860433f5f2823b113dd095ed2
    const input = useRef<HTMLInputElement | null>(null);

    return (
      <div className={styles.field}>
        <label htmlFor={name} className={styles.wrapper}>
<<<<<<< HEAD
          <span className={styles.span}>{placeholder}</span>
=======
          <div className={styles.placeholder}>
            <span>{placeholder}</span>
            {placeholder?.includes('Password') ? <a href="#">Forgot password?</a> : null}
          </div>
>>>>>>> fdc1f7c9b5980b5860433f5f2823b113dd095ed2
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
<<<<<<< HEAD
            className={styles.input}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            autoComplete={type === 'password' ? 'off' : 'on'}
=======
            ref={(e) => {
              inputRef!(e);
              input.current = e;
            }}
            className={styles.input}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
>>>>>>> fdc1f7c9b5980b5860433f5f2823b113dd095ed2
          />
        </label>
        {error ? <span className={styles.error}>{error}</span> : null}
      </div>
    );
  },
);

Input.displayName = 'Input';
