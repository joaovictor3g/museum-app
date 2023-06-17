import { RadioGroupItem, RadioGroupRoot } from "./styles";

import { User, MapPin, Edit } from "lucide-react";

export function RadioGroup() {
  return (
    <RadioGroupRoot defaultValue="artistsOrCulture">
      <RadioGroupItem value="artistsOrCulture">
        <User /> Artistas
      </RadioGroupItem>
      <RadioGroupItem value="title">
        <Edit />
        Obras de arte
      </RadioGroupItem>
      <RadioGroupItem value="location">
        <MapPin />
        Locais
      </RadioGroupItem>
    </RadioGroupRoot>
  );
}
