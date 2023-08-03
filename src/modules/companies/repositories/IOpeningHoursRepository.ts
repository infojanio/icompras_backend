import { OpeningHours } from '../infra/typeorm/entities/OpeningHours';

//DTO -> Data Transfer Object
interface ICreateOpeningHourDTO {
  title: string;
  operation_week: string;
  operation_weekend: string;
  notice?: string;
  status: string;
}

interface IOpeningHoursRepository {
  create({
    title,
    operation_week,
    operation_weekend,
    notice,
    status,
  }: ICreateOpeningHourDTO): Promise<void>;
  list(): Promise<OpeningHours[]>;

  findByName(title: string): Promise<OpeningHours | undefined>;
}

export { IOpeningHoursRepository, ICreateOpeningHourDTO };
