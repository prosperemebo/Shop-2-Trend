declare global {
  namespace NodeJs {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: number;
    }
  }
}
