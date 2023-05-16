import { Module } from '@nestjs/common';
import { XmlToJsonService } from './XmlToJson.service';
import { XmlToJsonController } from './XmlToJson.controller';

@Module({
  controllers: [XmlToJsonController],
  providers: [XmlToJsonService],
})
export class UserModule {}
