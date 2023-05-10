import { ICreateMapLocationDTO } from '@modules/maplocations/dtos/ICreateMapLocationDTO';
import { MapLocation } from '@modules/maplocations/infra/typeorm/entities/MapLocation';

interface IMapLocationsRepository {
  create(data: ICreateMapLocationDTO): Promise<void>;
  findByLocation(
    longitude: number,
    latitude: number,
    user_id: string,
  ): Promise<MapLocation | undefined>;
  list(): Promise<MapLocation[]>;
  findById(id: string): Promise<MapLocation | undefined>;
}
export { IMapLocationsRepository };
