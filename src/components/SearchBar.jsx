import React from "react";
import {FaSearch, FcSearch} from "react-icons/fa"
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
            <i className="FaSearch"></i>
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