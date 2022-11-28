import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UniverseDto } from './universe.dto';
import { Universe } from './universe.entity';

@Injectable()
export class UniverseService {
  constructor(
    @Inject('UNIVERSE_REPOSITORY')
    private universeRepository: Repository<Universe>,
  ) {}
  public async findAll(): Promise<Universe[]> {
    return this.universeRepository.find({ relations: ['heroes'] });
  }

  public async findOneUniverse(id: number) {
    const universe = await this.universeRepository.findOne({
      where: { id: id },
      relations: ['heroes'],
    });
    return universe;
  }

  public async createOne(hero: UniverseDto): Promise<Universe> {
    let createdUniverse = await this.universeRepository.save(hero);
    createdUniverse = await this.universeRepository.findOne({
      where: { id: createdUniverse.id },
    });
    return createdUniverse;
  }


  public async updateOne(universeDto: UniverseDto): Promise<Universe> {
    const { id } = universeDto;
    const persistedUniverse = await this.universeRepository.findOne({
      where: { id: id },
    });
    if (!persistedUniverse) {
      throw new NotFoundException(
        `Could not update universe with non-existing id ${id}.`,
      );
    }

    const updatedUniverse = await this.universeRepository.save({ id, ...universeDto });
    return updatedUniverse;
  }

  public async deleteOne(id: number): Promise<any> {
    let persistedUniverse = await this.universeRepository.findOne({
      where: { id },
      relations: ['heroe'],
    });
    if (!persistedUniverse) {
      throw new NotFoundException(`Universe with id ${id} was not found.`);
    }
    const deleteUniverse = (await this.universeRepository.delete({ id }))?.raw;
    return deleteUniverse;
  }
}
