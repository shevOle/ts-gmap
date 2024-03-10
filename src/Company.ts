import { ILocation } from "./dtos/location";

export class Company {
  constructor(
    public companyName: string,
    public description: string,
    public location: ILocation
  ) {}
}
