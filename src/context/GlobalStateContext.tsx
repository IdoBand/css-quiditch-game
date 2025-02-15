import { createContext, useReducer, ReactNode, useContext } from "react";
///////////////////////////////////////////////////
/// TYPES
type SnitchState = {
    style : {
      position: 'absolute',
      transformStyle: 'preserve-3d'
      transform: string,
      transition: string,
      opacity: string,
    },
    lastRotated: number
}
type GameState = {
    didFirstGame: boolean,
    isGameOn: boolean,
    isModal: boolean,
}

///////////////////////////////////////////////////
/// STATE CONSTANTS
const standbySnitch: SnitchState = {
    style: {
        position: 'absolute',
        transformStyle: 'preserve-3d',
        transform: 'translateX(-50%)',
        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
        opacity: '1',
    },
    lastRotated: 0
}

const initialState = {
    snitchState: standbySnitch,
    gameState: {
        didFirstGame: false,
        isGameOn: false,
        isModal: false,
    }
};
///////////////////////////////////////////////////
/// ACTIONS
type Action =
| { type: 'SET_SNITCH_STATE'; payload: (prev: SnitchState) => SnitchState }
| { type: 'START_GAME' }
| { type: 'STANDBY_GAME' }
| { type: 'STOP_GAME' }

function gameReducer(state: typeof initialState, action: Action) {
    switch (action.type) {
        case 'SET_SNITCH_STATE':
            return {
                ...state,
                snitchState: typeof action.payload === "function"
                    ? action.payload(state.snitchState)
                    : action.payload
            };

        case 'START_GAME':
            return { 
                snitchState: {
                    style: {...standbySnitch.style,
                        opacity: '0'
                    },
                    lastRotated: 0
                },
                gameState: {
                    isModal: false,
                    didFirstGame: true,
                    isGameOn: true
                }
            };

        case 'STANDBY_GAME':
            return {
                ...state,
                snitchState: standbySnitch,
            };

        case 'STOP_GAME':
            return {
                snitchState: standbySnitch,
                gameState: {
                    didFirstGame: true,
                    isGameOn: false,
                    isModal: true
                }
            };

        default:
            return state;
    }
}

///////////////////////////////////////////////////
/// CONTEXT

type GlobalContextType = {
    state: typeof initialState;
    dispatch: React.Dispatch<Action>;
};

const GlobalStateContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalStateProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    );
}

export function useGlobalState() {
    return useContext(GlobalStateContext)!
}