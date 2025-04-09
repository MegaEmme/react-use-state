import { useState } from "react";

function Button(props) {
    const buttons = props.Buttons;
    const [isActive, setIsActive] = useState(null);
    return (
        <>
            {buttons.map(element =>
                <button onClick={() => { setIsActive(element.title); props.changePress(element.title) }} key={element.id} className={`btn mb-5 m-2 ${isActive === element.title ? 'btn-warning' : 'btn-primary'}`}>
                    {element.title}
                </button>
            )}
            <div className={`card m-2 mb-4 ${isActive === null ? 'd-block' : 'd-none'}`}>
                <h4 className="card-body">NESSUN LINGUAGGIO SELEZIONATO</h4>
            </div>
        </>
    )
};

export default Button;
