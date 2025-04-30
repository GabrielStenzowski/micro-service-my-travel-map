import { compare } from 'bcryptjs'
import { IAuthenticateUserParams } from '../../repositories/i-user-place-repository'
import { IUserRepository } from '../../repositories/i-users-repository'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'
import { env } from '../../env'

class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async execute({ email, password }: IAuthenticateUserParams) {
    const UserAlreadyExists = await this.userRepository.findByEmail(email)

    if (!UserAlreadyExists) {
      throw new InvalidCredentialsError(env.ERROR_USER_HAS_NOT_EXIST)
    }
    try {
      const doesPasswordMatch = await compare(
        password,
        UserAlreadyExists.password_hash
      )
      if (!doesPasswordMatch) {
        throw new InvalidCredentialsError(env.ERROR_MAIL_OR_PASSWORD_INVALID)
      }
    } catch (error) {
      console.error('Error during password comparison:', error)
      throw new InvalidCredentialsError('500')
    }

    return { user: UserAlreadyExists }
  }
}

export { AuthenticateUserUseCase }
