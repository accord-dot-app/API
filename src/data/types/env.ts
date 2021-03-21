export {};

declare global
{
  namespace NodeJS
  {
    export interface ProcessEnv
    {
      API_URL: string;
      MONGO_URI: string;
      PORT: string;
      ROOT_ENDPOINT: string;
      WEBSITE_URL: string;
    }
  }
}
