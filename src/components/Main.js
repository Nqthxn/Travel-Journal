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
                        <span className="location-google"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                    </p>
                    <h1 className="location-name">{props.location}</h1>
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