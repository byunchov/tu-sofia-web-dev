import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule {}
