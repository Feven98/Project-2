import React from "react";

// creating function that accept props for searchbar
const SearchBar=({
    value,
    handleSubmit,
    isLoading,
    onChange
})=>{
return(
    <div className="search-container">
        <form onSubmit={handleSubmit}>
            <input value={value}
                   disabled={isLoading}
                   onChange={onChange}
                   placeholder='MEAL'
                   className="form"
            />
            <input type="submit"
                   className="btn"
                   value="Search"
                   disabled={isLoading || !value}
            />

        </form>
    </div>
    )
}
export default SearchBar