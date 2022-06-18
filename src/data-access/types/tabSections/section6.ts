export const SECTION6_DEFAULT: Section6Type = {
  professional: [],
  cross: [],
  id: "",
};

export interface Section6Type {
  id: string;
  professional: string[];
  cross: string[];
}

export interface Section6CreateDto extends Omit<Section6Type, "id"> {}
export const mapSection6TypeToSection6CreateDto = (
  section3: Section6Type
): Section6CreateDto => {
  const { professional, cross } = section3;

  return {
    professional,
    cross,
  };
};
