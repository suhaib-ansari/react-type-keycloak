import { ReactNode, useContext } from "react";
import { RendorOnRoleProps } from "../@types/UserType";
import CustomContext from "../services/Context";

const RendorOnRole = ({ roles, children }: RendorOnRoleProps) => {

  //role context 
  const userRoles = useContext(CustomContext.MyRoleContext);
  
  if (roles.some(r => userRoles?.includes(r))) {
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
