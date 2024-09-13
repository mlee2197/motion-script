import { StaticImageData } from "next/image";

export type TagT = {
  name: string;
  color: string;
};

export type ToolT = {
  name: string;
  color: string;
  icon: StaticImageData;
};

export type GsapQuickSetter = (value: string | number) => void;
