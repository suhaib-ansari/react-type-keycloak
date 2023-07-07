import UserService from "../services/UserService";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const RenderOnAuthenticated = ({ children }: IProps) =>
  UserService.isLoggedIn() ? children : null;

export default RenderOnAuthenticated;
