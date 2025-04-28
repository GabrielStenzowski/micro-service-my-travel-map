export class InvalidCredentialsError extends Error {
  public errorCode: string
  constructor(errorCode: string) {
    super('Invalid Credentials Error')
    this.errorCode = errorCode
  }
}
