import { useState } from "react";
import languages from "../data/languages";
import Card from "./Card";

function Main() {
    const [press, setPress] = useState(languages[0].title);
    return (
        <>
            {console.log(press)}
            <div className="container">
                {languages.map(element =>
                    <button onClick={() => { setPress(element.title) }} key={element.id} className="btn btn-primary mb-5 m-2">
                        {element.title}
                    </button>
                )}
                <Card Cards={languages.filter(element => element.title === press)} />
            </div>
        </>
    )
};

export default Main;

