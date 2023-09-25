import React from "react";

export default function Delete(props) {
    const{
        books,
        id,
        openDelete,
        cancelButtonOnClickHandler,
        confirmButtonOnClickHandler,
    } = props

    let foundBook = books[Number(id)]
    // console.log(id)

    return (
        openDelete &&
        <div className="fixed w-[100vW] h-[100vh] top-0">
            <div className="flex flex-col w-[500px] px-7 py-7 bg-white m-auto relative top-60 rounded-lg">
                <div
                    onClick={()=>cancelButtonOnClickHandler()}
                    className="flex justify-between"
                >
                    <h2 className="text-3xl font-bold">Delete book</h2>
                    <span><i className="fa-solid fa-xmark text-red-300 text-2xl hover:text-red-400"></i></span>
                </div>
                <p className="pb-7 pt-5 m-auto">Do you want to delete <span className="font-bold">{foundBook.name}</span></p>
                <div className="flex justify-evenly mb-5">
                    <button
                        onClick={()=>confirmButtonOnClickHandler()}
                        className="bg-red-300 text-white h-10 w-[150px] p-2 m-auto rounded-md hover:bg-red-400 hover:font-bold"
                    >Delete</button>
                    <button
                        onClick={()=>cancelButtonOnClickHandler()}
                        className="bg-red-300 text-white h-10 w-[150px] p-2 m-auto rounded-md hover:bg-red-400 hover:font-bold"
                    >Cancel</button>
                </div>
            </div>
        </div>
    )
}