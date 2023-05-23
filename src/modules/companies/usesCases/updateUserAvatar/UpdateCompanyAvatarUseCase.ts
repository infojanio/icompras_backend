import { ICompaniesRepository } from '@modules/companies/repositories/ICompaniesRepository';
import { deleteFile } from '@utils/file';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  company_id: string;
  logo_file: string;
}
//faz a atualização do avata do usuário
@injectable()
class UpdateCompanyAvatarUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({ company_id, logo_file }: IRequest): Promise<void> {
    //const usersRepository = getRepository(User);
    const company = await this.companiesRepository.findById(company_id);

    await deleteFile(`./tmp/logo/${company.logo}`);
    company.logo = logo_file; //não pode ser acesso

    await this.companiesRepository.create(company);
  }
}
export { UpdateCompanyAvatarUseCase };

/*
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }






    user.avatar = avatar_file;

    //se já existir avatar de usuário irá atualizar, se não irá incluir
    await usersRepository.save(user);

    return user;
  }
}
*/
