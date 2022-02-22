/* eslint-disable no-unused-vars */
import type { ChangeEvent, Ref } from 'react';

export type TextInputProps = {
  readonly type?: string;
  readonly name?: string;
  readonly value?: string;
  readonly onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly inputRef?: (ref: HTMLInputElement | null) => void | Ref<HTMLInputElement | null>;
  readonly placeholder?: string;
  readonly error?: string;
  readonly shouldBeFocused?: boolean;
};

export type PasswordInputProps = {
  readonly inputRef: Ref<HTMLInputElement>;
  readonly error: { message: string };
};

export type UserLoginData = {
  readonly email: string;
  readonly password: string;
};
