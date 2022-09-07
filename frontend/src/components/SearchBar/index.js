import './SearchBar.css'

function SearchBar(){


    return(
        <>
        <form className='search'>
            <input id='st' type='text'/>
            <i id='mag' className="fa-solid fa-magnifying-glass"></i>
        </form>
        </>
    )
    
}

export default SearchBar;