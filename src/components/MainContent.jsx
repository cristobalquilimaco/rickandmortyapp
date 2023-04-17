import LocationInfo from "./LocationInfo"
import ResidentCard from "./ResidentCard"


const MainContent = ({location}) => {
  return (
    <>
    <LocationInfo location={location}/>
      <div className="main__content">
        {
          location?.residents.map(url => (
            <ResidentCard 
            key={url}
            url={url}
            />
          ))
        }
      </div>
    </>
  )
}

export default MainContent