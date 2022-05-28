export enum Role {
  Admin = 10,
  User = 0,
}
export const Roles = [
  { label: "Admin", value: Role.Admin },
  { label: "User", value: Role.User },
];
export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}
export interface UserCreateDto extends Omit<User, "id" | "role"> {}

export const mapRoleIdToString = (roleId: Role): string => {
  switch (roleId) {
    case 10:
      return "Admin";
    default:
      return "User";
  }
};
