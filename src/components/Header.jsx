function Header(props) {
    const title = props.Title;
    return (
        <>
            <header className="p-1 mb-4">
                <h1>{title}</h1>
            </header>
        </>
    )
};

export default Header;