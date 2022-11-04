import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from '../pokemon/pokemon.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PokemonModule, InfrastructureModule],
})
export class SeedModule {}
