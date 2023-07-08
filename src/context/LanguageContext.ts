import { createContext } from "react";
import { LanguageContextType } from "../types/Types";

const LanguageContext = createContext<LanguageContextType>("ES");

export default LanguageContext;
