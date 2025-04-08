import languages from "../data/languages";
import Button from "./Button";
import Card from "./Card";

function Main() {
    return (
        <>
            <div className="container">
                <Button Button={languages} />
                <Card Card={languages} />
            </div>
        </>
    )
};

export default Main;