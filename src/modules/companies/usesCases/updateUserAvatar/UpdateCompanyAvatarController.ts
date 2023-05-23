import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateCompanyAvatarUseCase } from './UpdateCompanyAvatarUseCase';

class UpdateCompanyAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    //Receber arquivo

    const avatar_file = request.file.filename;

    const updateCompanyAvatarUseCase = container.resolve(
      UpdateCompanyAvatarUseCase,
    );
    await updateCompanyAvatarUseCase.execute({ company_id: id, avatar_file });
    return response.status(200).send();
  }
}
export { UpdateCompanyAvatarController };
