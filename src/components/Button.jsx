function Button(props) {
    const buttons = props.Button;
    return (
        <>
            {buttons.map(element =>
                <button key={element.id} className="btn btn-primary mb-5 m-2">{element.title}</button>
            )}
        </>
    )
};

export default Button;
