<<<<<<< HEAD
=======
/* eslint-disable no-unused-vars */
>>>>>>> fdc1f7c9b5980b5860433f5f2823b113dd095ed2
import type { ChangeEvent, Ref } from 'react';

export type TextInputProps = {
  readonly type?: string;
  readonly name?: string;
  readonly value?: string;
<<<<<<< HEAD
  // eslint-disable-next-line no-unused-vars
  readonly onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly inputRef?: any;
=======
  readonly onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly inputRef?: (ref: HTMLInputElement | null) => void | Ref<HTMLInputElement | null>;
>>>>>>> fdc1f7c9b5980b5860433f5f2823b113dd095ed2
  readonly placeholder?: string;
  readonly error?: string;
  readonly shouldBeFocused?: boolean;
};

export type PasswordInputProps = {
  readonly inputRef: Ref<HTMLInputElement>;
  readonly error: { message: string };
};
<<<<<<< HEAD:talk-with-yourself-frontend-next/types.ts
=======
<<<<<<< HEAD
=======

export type UserLoginData = {
  readonly email: string;
  readonly password: string;
};
>>>>>>> fdc1f7c9b5980b5860433f5f2823b113dd095ed2
>>>>>>> b4667f4c169e1ecddb440615169837563a782253:types.ts
