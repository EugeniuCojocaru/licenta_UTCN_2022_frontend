export const SECTION5_DEFAULT: Section5Type = {
  id: "",
  course: [],
  application: [],
};

export interface Section5Type {
  id: string;
  course: string[];
  application: string[];
}

export interface Section5CreateDto extends Omit<Section5Type, "id"> {}
export const mapSection5TypeToSection5CreateDto = (
  section3: Section5Type
): Section5CreateDto => {
  const { course, application } = section3;

  return {
    course,
    application,
  };
};
