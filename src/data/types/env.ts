export {};

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      API_URL: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
      DISCORD_TOKEN: string;
      EMAIL_ADDRESS: string;
      EMAIL_PASSWORD: string;
      MONGO_URI: string;
      PORT: string;
      ROOT_ENDPOINT: string;
      WEBSITE_URL: string;
    }
  }
}
