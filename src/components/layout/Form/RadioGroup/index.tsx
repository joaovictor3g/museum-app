import { RadioGroupItem, RadioGroupRoot } from "./styles";

import { User, MapPin, Edit } from "lucide-react";

interface RadioGroupProps {
  onValueChange(value: string): void;
  value: string;
}

export function RadioGroup({
  onValueChange,
  value = "artistOrCulture",
}: RadioGroupProps) {
  return (
    <RadioGroupRoot onValueChange={onValueChange} value={value}>
      <RadioGroupItem value="artistOrCulture" defaultChecked>
        <User /> Artistas
      </RadioGroupItem>
      <RadioGroupItem value="title">
        <Edit />
        Obras de arte
      </RadioGroupItem>
      <RadioGroupItem value="geoLocation">
        <MapPin />
        Locais
      </RadioGroupItem>
    </RadioGroupRoot>
  );
}
