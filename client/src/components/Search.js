import { useState } from "react";

const Search = () => {
    const [searching, setSearching] = useState('');
  
    function carSearch(e){
      setSearching(e.target.value);
    }
  
    return (
      <form onSubmit={(e) => e.preventDefault()}>
         <input 
            placeholder='Busca tu auto'
            value = {searching}
            onChange={carSearch}
            type="texto" className='input-container'
        />
      </form>
    )
  }
  export default Search;