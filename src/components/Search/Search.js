import "./search.css";
import ItemStatusFilter from "../ItemStatusFilter";

const Search = ({searchTerm, itemsStatus}) => {
  return (
      <div className={"w-50 mx-auto my-4 input-group"}>
          <input className={"form-control search-input"}
                 placeholder='Search...' onChange={e => searchTerm(e.target.value.toLowerCase())}/>
          <ItemStatusFilter itemsStatus={itemsStatus}/>
      </div>
  )
}

export default Search;