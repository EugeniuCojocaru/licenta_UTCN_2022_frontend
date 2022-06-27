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
export interface ContentOptionsInputDto extends ContentOptionsInputType {
  id: string;
}
export const CONTENT_OPTIONS_INPUT_DEFAULT: ContentOptionsInputType = {
  name: "",
  duration: 0,
  note: "",
};

export const mapContentOptionsInputDtoToContentOptionsInputType = (
  array: ContentOptionsInputDto[]
): ContentOptionsInputType[] =>
  array.map((input) => ({
    name: input.name,
    duration: input.duration,
    note: input.note,
  }));
