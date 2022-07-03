import { Role, Roles } from "../../data-access/types";

export const atLeastEditor = (): boolean => {
  const roleFromSession = window.sessionStorage.getItem("role");
  const role = Roles.find((r) => r.label === roleFromSession);
  if (role)
    if (role.value === Role.Editor || role.value === Role.Admin) return true;
  return false;
};
export const atLeastAdmin = (): boolean => {
  const roleFromSession = window.sessionStorage.getItem("role");
  const role = Roles.find((r) => r.label === roleFromSession);
  if (role) if (role.value === Role.Admin) return true;
  return false;
};
