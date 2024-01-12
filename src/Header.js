export function Header() {
    return (
        <header className="header">
            <img src={process.env.PUBLIC_URL+'/globe.svg'}></img>
            <span>my travel journal.</span>
        </header>
    )
}