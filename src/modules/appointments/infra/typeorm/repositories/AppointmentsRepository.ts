import { EntityRepository, Repository } from 'typeorm';

import IAppintmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

import Appointment from '../entities/Appointment';

@EntityRepository(Appointment)
class AppointmentRepository extends Repository<Appointment>
  implements IAppintmentsRepository {
  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment;
  }
}

export default AppointmentRepository;
