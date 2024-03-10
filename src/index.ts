import { faker } from "@faker-js/faker";
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User(
  faker.person.firstName(),
  faker.person.lastName(),
  faker.number.int({ min: 18, max: 80 }),
  {
    lng: faker.location.longitude(),
    lat: faker.location.latitude(),
  }
);

const company = new Company(faker.company.name(), faker.company.catchPhrase(), {
  lng: faker.location.longitude(),
  lat: faker.location.latitude(),
});

const map = new CustomMap("map");
map.addMarker(user);
map.addMarker(company);
