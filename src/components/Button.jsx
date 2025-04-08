import { useState } from "react";

function Button(props) {
    const buttons = props.Buttons;
    const [isActive, setIsActive] = useState(null);
    return (
        <>
            {buttons.map(element =>
                <button onClick={() => { setIsActive(element.title) }} key={element.id} className={`btn mb-5 m-2 ${isActive === element.title ? 'btn-warning' : 'btn-primary'}`}>
                    {element.title}
                </button>
            )}
        </>
    )
};

export default Button;
