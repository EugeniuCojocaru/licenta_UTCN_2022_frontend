export const SECTION9_DEFAULT: Section9Type = {
  description: "",
  id: "",
};

export interface Section9Type {
  id: string;
  description: string;
}
export interface Section9CreateDto extends Omit<Section9Type, "id"> {}
export const mapSection9TypeToSection9CreateDto = (
  section3: Section9Type
): Section9CreateDto => {
  const { description } = section3;

  return {
    description,
  };
};
