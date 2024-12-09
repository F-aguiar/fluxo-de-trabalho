import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreasModule } from './areas/areas.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Ou outro banco de dados
      host: 'localhost',
      port: 5432,
      username: 'ferdi',
      password: 'admin123',
      database: 'backend',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Vai sincronizar as entidades com o banco (cuidado em produção)
    }),
    AreasModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe, // Habilita a validação global usando o ValidationPipe
    },
  ],
})
export class AppModule {}
