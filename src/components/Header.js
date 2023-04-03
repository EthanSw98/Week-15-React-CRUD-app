import Helix from '../styles/images/helix-hd.png';

export default function Header(){

    return(
        <div className="row">
            <div className="col-sm">
                <img src={Helix} alt=""></img>
            </div>
            <div className="col-sm">
                <h1>Pokemon Journal</h1>
                <p>Record your sightings of any Pokemon you've encountered in the wild</p>
            </div>
            <div className="col-sm">
                <img src={Helix} alt=""></img>
            </div>
        </div>
    );
    
}