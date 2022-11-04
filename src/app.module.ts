import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    PokemonModule,
    InfrastructureModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
