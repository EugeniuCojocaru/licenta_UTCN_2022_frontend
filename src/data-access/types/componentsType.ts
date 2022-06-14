export interface SelectType {
  label: string;
  value: string;
}

export const mapArrayOfSelectTypeToArrayOfValues = (data: SelectType[]) =>
  data.map((item) => item.value);
