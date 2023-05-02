import { ICreateUserTokenDTO } from '@modules/users/dtos/ICreateUserTokenDTO';
import { UserTokens } from '@modules/users/infra/typeorm/entities/UserTokens';

interface IStoresTokensRepository {
  create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateStoreTokenDTO): Promise<StoreTokens>;

  findByStoreIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<StoreTokens>;

  deleteById(id: string): Promise<void>;

  findByRefreshToken(refresh_token: string): Promise<StoreTokens>;
}

export { IStoresTokensRepository };
