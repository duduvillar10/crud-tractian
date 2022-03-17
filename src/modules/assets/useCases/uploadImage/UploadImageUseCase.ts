import { inject, injectable } from 'tsyringe';
import { deleteFile } from '../../../../utils/file';

import { IAssetsRepository } from '../../infra/repositories/IAssetsRepository';

interface IRequest {
  id: string;
  imageName: string;
}

@injectable()
class UploadImageUseCase {
  constructor(
    @inject('AssetsRepository')
    private assetsRepository: IAssetsRepository,
  ) {}

  async execute({ id, imageName }: IRequest): Promise<void> {
    const asset = await this.assetsRepository.findById(id);
    console.log(imageName);
    if (asset) {
      deleteFile(`./tmp/assets/${asset.image}`),
        this.assetsRepository.update(id, { image: imageName });
    }
  }
}

export { UploadImageUseCase };
