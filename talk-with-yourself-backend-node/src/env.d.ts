declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_URL: string;
      SECRET_SESSION: string;
      USER_ID_TOKEN: string;
      USER_SECRET_TOKEN: string;
      USER_REFRESH_TOKEN: string;
      USER_EMAIL: string;
      REDIRECT_URI: string;
    }
  }
}

export {}
