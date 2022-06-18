export interface SelectType {
  label: string;
  value: string;
}

export const mapArrayOfSelectTypeToArrayOfValues = (data: SelectType[]) =>
  data.map((item) => item.value);

export interface ContentOptionsInputType {
  name: string;
  duration: number;
  note: string;
}
export const CONTENT_OPTIONS_INPUT_DEFAULT: ContentOptionsInputType = {
  name: "",
  duration: 0,
  note: "",
};
