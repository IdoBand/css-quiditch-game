export type SnitchState = {
    style : {
      position: 'absolute',
      transformStyle: 'preserve-3d'
      transform: string,
      transition: string,
      opacity: string,
    },
    lastRotated: number
}

export type GameState = {
    isGameOn: boolean,
    isModal: boolean,
}

export type GlobalState = {
    snitchState: SnitchState
    gameState: GameState
}

export type Action =
| { type: 'SET_SNITCH_STATE'; payload: (prev: SnitchState) => SnitchState }
| { type: 'START_GAME' }
| { type: 'STANDBY_GAME' }
| { type: 'STOP_GAME' }
| { type: 'EXIT_MODAL' }