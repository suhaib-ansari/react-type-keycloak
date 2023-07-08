import { createContext } from "react";
import { User } from "../@types/UserType";


const MyContext = createContext<User[] | null>(null);

export default MyContext;
