import { useState } from "react";
import languages from "../data/languages";
import Card from "./Card";
import Button from "./Button";

function Main() {
    const [press, setPress] = useState("");

    return (
        <>
            <div className="container">
                <Button Buttons={languages} changePress={setPress} />
                <Card Cards={languages.filter(element => element.title === press)} />
            </div >
        </>
    )
};

export default Main;

