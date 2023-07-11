import { createContext } from "react";
import { NavContextType } from "../types/Types";

const NavContext = createContext<NavContextType>(false);

export default NavContext;
