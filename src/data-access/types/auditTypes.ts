export interface AuditType {
  user: string;
  operation: string;
  entity: string;
  notes: string;
  createdAt: string;
}

export const AUDIT_DEFAULT: AuditType = {
  user: "",
  operation: "",
  entity: "",
  notes: "",
  createdAt: "",
};
