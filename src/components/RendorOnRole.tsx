import { ReactNode } from "react";
import UserService from "../services/UserService";

type RendorOnRoleProps = {
  roles: string[];
  children: ReactNode;
};

const RendorOnRole = ({ roles, children }: RendorOnRoleProps) =>
  UserService.hasRole(roles) ? children : null;

export default RendorOnRole;
