import "./search.css";
import ItemStatusFilter from "./ItemStatusFilter";

const Search = () => {
  return (
      <div className={"w-50 mx-auto my-4 input-group"}>
          <input className={"form-control search-input"} placeholder='Search...'/>
          <ItemStatusFilter/>
      </div>
  )
}

export default Search;