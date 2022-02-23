type SameSiteOptions = "lax" | "strict" | "none";

export const sessionConfig = {
  name: "session",
  secret: process.env.SECRET_SESSION as string,
  cookie: {
    secure: false,
    sameSite: "lax" as SameSiteOptions,
    httpOnly: true,
  },
  resave: true,
  saveUninitialized: false,
};
