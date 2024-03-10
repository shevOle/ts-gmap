import { ILocation } from "./dtos/location";

export class MapMarker {
  private marker: google.maps.Marker;
  private infoModal: google.maps.InfoWindow;
  private isModalOpen: boolean = false;

  constructor(
    private map: google.maps.Map,
    position: ILocation,
    private markerContent: string
  ) {
    this.marker = new google.maps.Marker({
      map,
      position,
    });

    this.infoModal = new google.maps.InfoWindow({
      content: this.markerContent,
    });

    this.marker.addListener("click", () => {
      !this.isModalOpen && this.infoModal.open(this.map, this.marker);
    });
  }
}
