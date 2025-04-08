import { useState } from "react";

function Button(props) {
    const buttons = props.Button;
    const [press, setPress] = useState(null);
    return (
        <>
            {buttons.map(element =>
                <button onClick={() => { setPress(press === element.title) }} key={element.id} className="btn btn-primary mb-5 m-2">{`${element.title} ${press}`}</button>
            )}
        </>
    )
};

export default Button;
