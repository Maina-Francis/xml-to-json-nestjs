import { Controller, Post, Body } from '@nestjs/common';
import { XmlToJsonService } from './XmlToJson.service';

@Controller('xmlToJson')
export class XmlToJsonController {
  constructor(private readonly xmlToJsonService: XmlToJsonService) {}

  @Post()
  async convertXmlToJson(@Body() xmlData): Promise<any> {
    return this.xmlToJsonService.convertXmlToJson(xmlData);
  }
}
