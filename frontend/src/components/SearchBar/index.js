import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchQueryBusinesses } from '../../store/businesses';
import './SearchBar.css'

function SearchBar(){

    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const history = useHistory();
    

    const handleSubmit = (e) =>{
        console.log(query)
        e.preventDefault();
        dispatch(fetchQueryBusinesses(query));
        history.push(`/search/${query}`)
    }

    return(
        <>
        <div className='search'>
            <form onSubmit={handleSubmit}>
            <input id='st' type='text' value={query} onChange={(e)=> setQuery(e.target.value)}/>
            <button type='submit'>
                <i id='mag' className="fa-solid fa-magnifying-glass"></i>
            </button>

            </form>
        </div>
        </>
    )
    
}

export default SearchBar;