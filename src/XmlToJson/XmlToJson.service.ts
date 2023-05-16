import { Injectable } from '@nestjs/common';

@Injectable()
export class XmlToJsonService {
  async convertXmlToJson(xmlData): Promise<any> {
    console.log(xmlData);
    return xmlData;
  }
}
