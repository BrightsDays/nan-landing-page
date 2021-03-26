import './Button.sass';

const Button = ({ text, action, mod}) => {
    let buttonClass = 'button';
    if (mod) {
        buttonClass = buttonClass + ' ' + (buttonClass + mod);
    }

    return(
        <button className={buttonClass}
                onClick={e => {
                    e.preventDefault();
                }}>
            {text}
        </button>
    )
};

export default Button;