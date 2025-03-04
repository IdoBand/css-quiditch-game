import { GlobalStateContext } from "./GlobalStateContext";
import { useReducer, ReactNode } from "react";
import { GlobalState, SnitchState }from './types'

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

const initialState: GlobalState = {
    snitchState: standbySnitch,
    gameState: {
        isGameOn: false,
        isModal: false,
    }
};

type Action =
| { type: 'SET_SNITCH_STATE'; payload: (prev: SnitchState) => SnitchState }
| { type: 'START_GAME' }
| { type: 'STANDBY_GAME' }
| { type: 'STOP_GAME' }
| { type: 'EXIT_MODAL' }

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
                    isGameOn: false,
                    isModal: true
                }
            };
        case 'EXIT_MODAL':
            return {
                snitchState: standbySnitch,
                gameState: {
                    isGameOn: false,
                    isModal: false
                }
            }
        default:
            return state;
    }
}

export function GlobalStateProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    );
}