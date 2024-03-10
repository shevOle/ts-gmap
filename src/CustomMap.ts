import { MapMarker } from "./MapMarker";
import { IMappable } from "./dtos/mappable";

export class CustomMap {
  private googleMap: google.maps.Map;
  private markers: MapMarker[] = [];

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        center: {
          lat: 0,
          lng: 0,
        },
        zoom: 2,
      }
    );
  }

  addMarker(mappable: IMappable) {
    this.markers.push(
      new MapMarker(
        this.googleMap,
        mappable.location,
        mappable.getMarkerContent()
      )
    );
  }
}
