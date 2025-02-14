import { createContext, ReactNode, SetStateAction, useState, useContext } from "react";

type GameState = {
    didFirstGame:boolean
    isGameOn: boolean
    isModal: boolean
}

type GameStateContextType = {
    gameState: {
        didFirstGame:boolean
        isGameOn: boolean
        isModal: boolean
    }
    setGameState: React.Dispatch<SetStateAction<GameState>>
}

const GameStateContext = createContext<GameStateContextType | undefined>(undefined)

type GameContextProviderProps = {
    children: ReactNode
}

export function GameContextProvider({ children }: GameContextProviderProps) {
    const [ gameState, setGameState ] = useState<GameState>({
        didFirstGame: false,
        isGameOn: false,
        isModal: false,
    })
    
    return (
        <GameStateContext.Provider
            value={{
                gameState,
                setGameState
            }}>
            {children}
        </GameStateContext.Provider>
    )
}

export function useGameContext(): GameStateContextType {
    const gameStateContext = useContext(GameStateContext)

    return gameStateContext!
}