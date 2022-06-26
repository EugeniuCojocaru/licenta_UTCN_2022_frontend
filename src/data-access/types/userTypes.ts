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

export interface UserCreateViaAdminDto extends Omit<User, "id"> {}
export interface UserList extends Omit<User, "email" | "role"> {}

export const USER_DEFAULT: User = {
  id: "",
  name: "",
  email: "",
  role: Role.User,
};
export const mapRoleIdToString = (roleId: Role): string => {
  switch (roleId) {
    case 10:
      return "Admin";
    default:
      return "User";
  }
};

export const mapUsersToSelectType = (users: User[] | UserList[]) =>
  users.map((user) => ({ label: user.name, value: user.id }));
