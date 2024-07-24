import earthIcon from '../Images/earth-icon.png';


export default function Header(){
    return(
        <div className="header-container">
            <img src={earthIcon} alt="Earth Icon"/>
            <h1 className="header-title">Travel Journal</h1>
        </div>
    );
}