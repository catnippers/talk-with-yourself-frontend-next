declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_URL: string;
      SECRET_SESSION: string;
    }
  }
}

export {}
