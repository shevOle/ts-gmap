import { ILocation } from "./dtos/location";

export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public location: ILocation
  ) {}
}
