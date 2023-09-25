import React from "react";

export default function SearchBar(props) {
    const { 
        onSearchHandler,
        searchContent
     } = props
    // console.log(searchContent)
    return (
        <>
            <input
                type="text"
                placeholder="Search books"
                className="w-[300px] rounded-md h-10 p-2 mx-3"
                value={searchContent}
                onChange={(e)=>onSearchHandler(e.target.value)}
            />
        </>
    )
}