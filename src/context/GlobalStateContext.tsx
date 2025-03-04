import { createContext } from "react";
import { Action, GlobalState } from "./types";

type GlobalContextType = {
    state: GlobalState;
    dispatch: React.Dispatch<Action>;
};

export const GlobalStateContext = createContext<GlobalContextType | undefined>(undefined);