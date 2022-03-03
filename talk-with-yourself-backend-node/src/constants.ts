const address = "http://localhost:3000";

export const mailOptions = {
  activate: {
    subject: "Activate account",
    html: (
      name: string,
      token: string
    ) => `<h1>Hello, ${name}!</h1><span>It looks like you haven't activated your account yet. Click on the link below to do so: </span> <br/>${
      address + "/activate-account/" + token
    }<br/> <h4>This
    so easy!</h4><span>If you have not created an account in our application, please ignore this message.</span>`,
  },
  resetPassword: {
    subject: "Reset password",
    html: (name: string | null, token: string) =>
      `<h1>Cześć, ${name}!</h1><span>Click the link below to reset your password: </span> <br/>${
        address + "/change-password/" + token
      }`,
  },
};
