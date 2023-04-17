
const LocationInfo = ({location}) => {
  return (
    <div className="location__info__resident">
        <h2 className="name__location">{location?.name}</h2>
        <ul className="info__location">
            <li className="location__world"><span className="defintion__location">Type: </span>{location?.type}</li>
            <li className="location__world"><span className="defintion__location">Dimension: </span>{location?.dimension}</li>
            <li className="location__world"><span className="defintion__location">Population: </span>{location?.residents.length}</li>
        </ul>
    </div>
  )
}

export default LocationInfo