export type UserLoginData = {
  readonly email: string;
  readonly password: string;
};

export type UserRegisterData = {
  readonly email: string;
  readonly password: string;
};

export type User = {
  readonly id: number;
  readonly email: string;
  readonly password: string;
};
