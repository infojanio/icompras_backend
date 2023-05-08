import { getRepository, Repository } from 'typeorm';
import { ICreateMapLocationDTO } from '@modules/maplocations/dtos/ICreateMapLocationDTO';
import { IMapLocationsRepository } from '@modules/maplocations/repositories/IMapLocationsRepository';
import { MapLocation } from '@modules/maplocations/infra/typeorm/entities/MapLocation';

class MapLocationsRepository implements IMapLocationsRepository {
  private repository: Repository<MapLocation>;

  constructor() {
    this.repository = getRepository(MapLocation);
  }

  async create({
    avatar,
    longitude,
    latitude,
    user_id,
    isActive,
  }: ICreateMapLocationDTO): Promise<void> {
    const maplocation = this.repository.create({
      avatar,
      longitude,
      latitude,
      user_id,
      isActive,
    });
    await this.repository.save(maplocation);
  }

  async list(): Promise<MapLocation[]> {
    const maplocation = await this.repository.find();
    return maplocation;
  }
  // método encontrar cidade por nome
  public async findByLocation(
    longitude: number,
    latitude: number,
  ): Promise<MapLocation | undefined> {
    const maplocation = await this.repository.findOne({
      where: { longitude, latitude },
    });
    // console.log(city);
    return maplocation;
  }

  async findById(id: string): Promise<MapLocation | undefined> {
    const maplocation = await this.repository.findOne(id);
    return maplocation;
  }
}
export { MapLocationsRepository };
