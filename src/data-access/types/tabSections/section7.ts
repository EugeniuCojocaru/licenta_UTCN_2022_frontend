export const SECTION7_DEFAULT: Section7Type = {
  generalObjective: "",
  specificObjectives: [],
  id: "",
};

export interface Section7Type {
  generalObjective: string;
  specificObjectives: string[];
  id: string;
}
export interface Section7CreateDto extends Omit<Section7Type, "id"> {}
export const mapSection7TypeToSection7CreateDto = (
  section3: Section7Type
): Section7CreateDto => {
  const { generalObjective, specificObjectives } = section3;

  return {
    generalObjective,
    specificObjectives,
  };
};
