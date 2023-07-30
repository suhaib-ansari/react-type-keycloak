import { createContext } from "react";
import { User } from "../@types/UserType";


const MyContext = createContext<User[] | null>(null);
const MyRoleContext = createContext<string[] | null>(null);

const CustomContext={
    MyContext,
    MyRoleContext
}

export default CustomContext;
