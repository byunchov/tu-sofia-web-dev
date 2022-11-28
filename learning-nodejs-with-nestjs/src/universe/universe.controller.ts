import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UniverseDto } from './universe.dto';
import { UniverseService } from './universe.service';

@Controller('universe')
export class UniverseController {
  constructor(private universeService: UniverseService) {}

  @Get()
  async getAllUniverses() {
    const universes = await this.universeService.findAll();
    return universes;
  }

  @Get(':id')
  async getOneUniverses(@Param('id') id: number) {
    const universe = await this.universeService.findOneUniverse(id);
    return universe;
  }

  @Post()
  async createOne(@Body() universe: UniverseDto) {
    const createdUniverse = await this.universeService.createOne(universe);
    return createdUniverse;
  }

  @Put()
  async updateOne(@Body() universe: UniverseDto) {
    const updatedUniverse = await this.universeService.updateOne(universe);
    return updatedUniverse;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const deletedUniverse = await this.universeService.deleteOne(id);
    return deletedUniverse;
  }
}
