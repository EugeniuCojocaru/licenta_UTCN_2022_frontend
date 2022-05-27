export enum Role {
  Admin = 10,
  User = 0,
}
export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}
export interface UserCreateDto extends Omit<User, "id" | "role"> {}
