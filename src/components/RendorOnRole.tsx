import { ReactNode } from "react";
import UserService from "../services/UserService";
import { RendorOnRoleProps } from "../@types/UserType";

const RendorOnRole = ({ roles, children }: RendorOnRoleProps) => {
  if (UserService.hasRole(roles)) {
    return (
      <>
        {children}
      </>
    )
  } else {
    return null;
  }

}

export default RendorOnRole;
