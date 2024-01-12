
export function Main(props) {
    console.log(props.item)
    return (
        <main className="main">
            <img src={process.env.PUBLIC_URL+props.item.image} className="landscape"></img>
            <div className="main-text">
                <span className="main--google-maps">
                    <img src={process.env.PUBLIC_URL+'/location.svg'}></img> {props.item.location}
                </span>
                <span className="main--google-maps"><a href={props.item.googleMapsUrl} target="_blanch">View on Google Maps</a></span>
                <h1>{props.item.title}</h1>
                <div className="main--date"><strong>{props.item.startDate} - {props.item.endDate}</strong></div>
                <p>
                    {props.item.description}
                </p>
            </div>
        </main>
    )
}