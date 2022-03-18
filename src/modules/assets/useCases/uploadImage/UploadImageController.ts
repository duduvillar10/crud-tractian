import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UploadImageUseCase } from './UploadImageUseCase';

interface IFile {
  filename: string;
}

class UploadImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { filename } = request.file as IFile;

    const uploadImageUseCase = container.resolve(UploadImageUseCase);

    await uploadImageUseCase.execute({ id, imageName: filename });

    return response.status(204).send();
  }
}

export { UploadImageController };
