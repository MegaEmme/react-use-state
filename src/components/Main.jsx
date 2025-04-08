import { useState } from "react";
import languages from "../data/languages";
import Card from "./Card";
import Button from "./Button";

function Main() {
    const [press, setPress] = useState(false);

    return (
        <>
            {console.log(press)}
            <div className="container">
                <Button Buttons={languages} />
                <Card Cards={languages.filter(element => element.title === press)} />
            </div >
        </>
    )
};

export default Main;

