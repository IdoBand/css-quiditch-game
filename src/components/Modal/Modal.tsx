import './Modal.scss'
import { useGlobalState } from '../../context/useGlobalState';

const Modal = () => {

    const { dispatch } = useGlobalState()

  return (
    <div className='modal-underlay'>
        <div className='modal-content'>
            <button 
            className='modal-close-button' 
            onClick={() => dispatch({type: "EXIT_MODAL"})}
            type='button'
            >
                X
            </button>
            <p>
                Well Done!<br />You're a seeker
            </p> 
            <div className="modal-buttons-container">
                <button
                    className="restart-game-button"
                    type="button"
                    onClick={() => dispatch({type: "START_GAME"})}
                    >
                    Restart Game
                </button>
                <div className="links">
                    {LINKS.map(link => {
                        return (<a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            className={`social-media-icon ${link.media}`}
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
        media: 'linkedin',
        url: 'https://www.linkedin.com/in/ido-band/',
    },
    {
        media: 'github',
        url: 'https://www.github.com/IdoBand/css-quiditch-game',
    },
    {
        media: 'portfolio',
        url: 'https://idoband.onrender.com/'

    }
]