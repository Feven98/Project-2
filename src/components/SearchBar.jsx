import React from "react";
const SearchBar=({
    value,
    handleSubmit,
    isLoading,
    onChange
})=>{
return(
    <div className="container">
        <form onSubmit={handleSubmit}>
            <input value={value}
                   disabled={isLoading}
                   onChange={onChange}
                   placeholder="search"
                   className="form"
            />
            <input type="submit"
                   className="btn"
                   value="search"
                   disabled={isLoading || !value}
            />

        </form>
    </div>
    )
}
export default SearchBar