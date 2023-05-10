import { ICreateMapLocationDTO } from '@modules/maplocations/dtos/ICreateMapLocationDTO';
import { MapLocation } from '@modules/maplocations/infra/typeorm/entities/MapLocation';
import { IMapLocationsRepository } from '../IMapLocationsRepository';

class MapLocationsRepositoryInMemory implements IMapLocationsRepository {
  maplocations: MapLocation[] = [];

  //1. teste de criação do usuário
  async create({
    avatar,
    longitude,
    latitude,
    user_id,
  }: ICreateMapLocationDTO): Promise<void> {
    const maplocation = new MapLocation();

    Object.assign(maplocation, {
      avatar,
      longitude,
      latitude,
      user_id,
    });
    this.maplocations.push(maplocation);
  }

  //2. teste de verificação de cadastro de usuário já existente
  async findByLocation(
    longitude: number,
    latitude: number,
  ): Promise<MapLocation | undefined> {
    return this.maplocations.find(
      (maplocation) =>
        maplocation.longitude === longitude &&
        maplocation.latitude === latitude,
    );
  }

  //3. teste de verificação de
  async findById(id: string): Promise<MapLocation | undefined> {
    return this.maplocations.find((maplocation) => maplocation.id === id);
  }

  async list(): Promise<MapLocation[]> {
    const all = this.maplocations;
    return all;
  }
}
export { MapLocationsRepositoryInMemory };
