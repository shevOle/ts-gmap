import { ILocation } from "./dtos/location";
import { IMappable } from "./dtos/mappable";

export class User implements IMappable {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public location: ILocation
  ) {}

  getMarkerContent(): string {
    return `
      <h3>${this.firstName} ${this.lastName}</h3>
      <div>The person of age ${this.age}</div>
      `;
  }
}
