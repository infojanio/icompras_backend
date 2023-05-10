import { MapLocation } from '@modules/maplocations/infra/typeorm/entities/MapLocation';
import { IMapLocationsRepository } from '@modules/maplocations/repositories/IMapLocationsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListMapLocationsUseCase {
  constructor(
    @inject('MapLocationsRepository')
    private maplocationsRepository: IMapLocationsRepository,
  ) {}

  async execute(): Promise<MapLocation[]> {
    const maplocations = await this.maplocationsRepository.list();
    return maplocations;
  }
}

export { ListMapLocationsUseCase };
