import UseFetch from "../hooks/UseFetch"


const ResidentCard = ({ url }) => {
  
  const [resident] = UseFetch(url)

  console.log(resident);
  
    return (
    <div className="resident__card">
        <header className="principal__header">
            <img className="resident__img" src={resident?.image} alt="" />
            <div className="status__resident">
                <div className={`circle ${resident?.status}`}>
                </div>
                    <span className="status__span">{resident?.status}</span>
                
            </div>
        </header>
<section className="information__resident">
    <h3 className="title__name">{resident?.name}</h3>
    <hr className="line" />
    <ul className="description__resident">
        <li className="information"><span className="definition__resident">Specie </span>{resident?.species}</li>
        <li className="information"><span className="definition__resident">Origin </span>{resident?.origin.name}</li>
        <li className="information"><span className="definition__resident">Episodes where appear </span>{resident?.episode.length}</li>
    </ul>
</section>
    </div>
  )
}

export default ResidentCard