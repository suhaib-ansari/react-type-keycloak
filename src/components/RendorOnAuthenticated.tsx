import { IProps } from "../@types/UserType";
import UserService from "../services/UserService";

const RenderOnAuthenticated = ({ children }: IProps) => {
  if (UserService.isLoggedIn()) {
    return (
      <>
        {children}
      </>
    )
  } else {
    return null;
  }
}
//if i do directly it will give us build failure bt locally it will work 
// UserService.isLoggedIn() ? children : null;

export default RenderOnAuthenticated;
