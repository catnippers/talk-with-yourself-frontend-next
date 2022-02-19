const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

export const inputValidation = {
  email: {
    required: { value: true, message: 'Email is required.' },
    pattern: {
      value: EMAIL_REGEX,
<<<<<<< HEAD
      message: 'Email must be a valid email.',
=======
      message: 'Incorrect username or password.',
>>>>>>> fdc1f7c9b5980b5860433f5f2823b113dd095ed2
    },
  },
  password: {
    required: { value: true, message: 'Password is required.' },
    pattern: {
      value: PASSWORD_REGEX,
<<<<<<< HEAD
      message:
        'Password must contain an uppercase letter, a special character, a number and must be at least 8 characters long.',
=======
      message: 'Incorrect username or password.',
>>>>>>> fdc1f7c9b5980b5860433f5f2823b113dd095ed2
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
