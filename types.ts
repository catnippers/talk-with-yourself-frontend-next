import type { ChangeEvent, Ref } from 'react';

export type TextInputProps = {
  readonly type?: string;
  readonly name?: string;
  readonly value?: string;
  // eslint-disable-next-line no-unused-vars
  readonly onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly inputRef?: any;
  readonly placeholder?: string;
  readonly error?: string;
  readonly shouldBeFocused?: boolean;
};

export type PasswordInputProps = {
  readonly inputRef: Ref<HTMLInputElement>;
  readonly error: { message: string };
};
