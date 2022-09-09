import './SearchBar.css'

function SearchBar(){


    return(
        <>
        <div className='search'>
            <input id='st' type='text'/>
            <i id='mag' className="fa-solid fa-magnifying-glass"></i>
        </div>
        </>
    )
    
}

export default SearchBar;