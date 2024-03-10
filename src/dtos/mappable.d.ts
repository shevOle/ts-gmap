import { ILocation } from "./location";

export interface IMappable {
  location: ILocation;
  getMarkerContent(): string;
}
