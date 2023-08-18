type StatesOfMatter = "liquid" | "solid" | "gaseous";
type IdentifyingDocument = string | number;
type SO = "Linux" | "MacOS" | "Windows";

type ReservationNames = string[] | string;
type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
}