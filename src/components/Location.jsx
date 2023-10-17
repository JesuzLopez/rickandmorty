import { IconSearch } from "@tabler/icons-react"
import axios from "axios"

const Location = ({ location, setLocation }) => {

    const handleSubmit = (e) => {
    e.preventDefault()
    const idLocation = e.target.idLocation.value

    axios
    .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
    .then(({ data }) => setLocation(data))
    .catch((err) => console.log(err))
    }

    return (
      <section> 
      <form onSubmit={handleSubmit} className="flex">
        <input name="idLocation" className="text-black" type="number" />
        <button type="submit" className="flex gap-2 items-center">
            Search <IconSearch size={18}/>
             </button>
      </form>

        {/* Location Info */}
        <section>
        <h3>{location?.name}</h3>

        <ul>
            <li>Type:{location?.type}</li>
            <li>Dimension: {location?.dimension}</li>
            <li>Population: {location?.residents.length}</li>
        </ul>
        </section>
      </section>
    )
}
export default Location 