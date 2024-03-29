const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

export const inputValidation = {
  email: {
    required: { value: true, message: 'Email is required.' },
    pattern: {
      value: EMAIL_REGEX,
      message: 'Incorrect username or password.',
    },
  },
  password: {
    required: { value: true, message: 'Password is required.' },
    pattern: {
      value: PASSWORD_REGEX,
      message: 'Incorrect username or password.',
    },
  },
  other: {
    required: { value: true, message: 'This field is required.' },
    minLength: {
      value: 2,
      message: 'This field must be at least 2 characters. ',
    },
  },
};
