import locationIcon from '../Images/locations-icon.png';

export default function Main(props){
    return(
        <div className="content-container">
            <div className="image-container">
                <img src={props.imageUrl} className="img" />
            </div>
            <div className="info-container">
                <div className="location-container">
                    <p className="location">
                        <img src={locationIcon} className="location-icon"/>
                        <span className="location-country">{props.location}</span>
                        <a href={props.googleMapsUrl}><span className="location-google">View on Google Maps</span></a>
                    </p>
                    <h1 className="location-name">{props.title}</h1>
                </div>
                <div className="description-container">
                    <div className="date-container">
                        <h3 className="date">{props.startDate} - {props.endDate}</h3>
                    </div>
                    <div className="location-description-container">
                        <p className="location-description">
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}