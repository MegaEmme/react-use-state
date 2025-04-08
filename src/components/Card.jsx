function Card(props) {
    const cards = props.Cards
    return (
        <>
            {cards.map(element =>
                <div key={element.id} className="card">
                    <h4 className="card-body">{element.title}</h4>
                    <p className="card-body">{element.description}</p>
                </div>
            )}
        </>
    )
};

export default Card;
