import React from "react";

export default function Add(props){
    const {
        addButtonOnClickHandler,
    } = props
    return(
        <button
            className="w-[150px] bg-red-300 rounded-md h-10 p-2 mx-3 text-white hover:bg-red-400 hover:font-bold"
            onClick={() => addButtonOnClickHandler()}
        >
            Add book
        </button>
    )
}