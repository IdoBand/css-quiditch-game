import './Modal.scss'
import { SocialIcon } from "react-social-icons"
import { useGlobalState } from '../../context/GlobalStateContext';

const Modal = () => {

    const { state, dispatch } = useGlobalState()

  return (
    <div className='modal-underlay'>
        <div className='modal-content'>
            {!state.gameState.isGameOn &&
            <p>
                Well Done!<br />You're a seeker
            </p> 
            }
            <div className="modal-buttons-container">
                <button
                    className="restart-game-button"
                    type="button"
                    onClick={() => dispatch({type: "START_GAME"})}
                    >
                    Restart Game
                </button>
                <div className="links">
                    <a href="https://idoband.onrender.com/" target="_blank" className="portfolio-icon" />
                    {LINKS.map(link => {
                        return (<SocialIcon 
                            key={link.url} 
                            url={link.url}
                            target='_blank'
                            />)
                        })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal

const LINKS = [
    {
        media: 'github',
        url: 'www.github.com/IdoBand/css-quiditch-game',
    },
    {
        media: 'linkedin',
        url: 'https://www.linkedin.com/in/ido-band/',
    },
]