export class APIError extends TypeError {
  constructor(public code: number, message: string) {
    super(message);
  }
}
