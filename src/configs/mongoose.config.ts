import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const mongooseConfigFactory = (
  configService: ConfigService,
): MongooseModuleOptions => (
  console.log(configService.get('DB_URL')),
  {
    uri: configService.get('DB_URL'),
  }
);
