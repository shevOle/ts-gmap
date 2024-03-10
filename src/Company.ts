import { ILocation } from "./dtos/location";
import { IMappable } from "./dtos/mappable";

export class Company implements IMappable {
  constructor(
    public companyName: string,
    public description: string,
    public location: ILocation
  ) {}

  getMarkerContent(): string {
    return `
      <h3>${this.companyName}</h3>
      <div>${this.description}</div>
      `;
  }
}
