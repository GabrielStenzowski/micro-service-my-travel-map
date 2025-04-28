import { compare, hash } from 'bcryptjs'
import { IAuthenticateUserParams } from '../../repositories/i-user-place-repository'
import { IUserRepository } from '../../repositories/i-users-repository'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'

class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async execute({ email, password }: IAuthenticateUserParams) {
    console.log('Authenticating user:', { email, password })
    const UserAlreadyExists = await this.userRepository.findByEmail(email)

    if (!UserAlreadyExists) {
      throw new InvalidCredentialsError('401')
    }
    console.log('User found:', UserAlreadyExists)

    try {
      const doesPasswordMatch = await compare(
        password,
        UserAlreadyExists.password_hash
      )
      console.log('Password match:', doesPasswordMatch)
      if (!doesPasswordMatch) {
        throw new InvalidCredentialsError('402')
      }
    } catch (error) {
      console.error('Error during password comparison:', error)
      throw new InvalidCredentialsError('500')
    }

    return { user: UserAlreadyExists }
  }
}

export { AuthenticateUserUseCase }
