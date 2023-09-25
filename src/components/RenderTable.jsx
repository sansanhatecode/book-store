import React from "react";

export default function RenderTable(props) {
    const { 
        books,
        deleteButtonOnClickHandler
    } = props
    return (
        <div className="">
            <table className="border-collapse border-2 border-white relative w-[75%] m-auto">
                <thead>
                    <tr className="h-14">
                        <th className="border-2 border-white w-[40%]">Name</th>
                        <th className="border-2 border-white w-[25%]">Author</th>
                        <th className="border-2 border-white w-[25%]">Topic</th>
                        <th className="border-2 border-white w-[10%]">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr 
                            key={book.id}
                            className="h-14"
                        >
                            <td className="border-2 border-white px-4">{book.name}</td>
                            <td className="border-2 border-white px-4">{book.author}</td>
                            <td className="border-2 border-white px-4">{book.topic}</td>
                            <td className="border-2 border-white">
                                <button
                                    id = {book.id}
                                    onClick={(e)=>{
                                        {deleteButtonOnClickHandler(e.currentTarget.id)}
                                        // console.log(e.currentTarget)
                                        // console.log(book.id)
                                    }}
                                    className="mx-[45%]"
                                >
                                    <i className="fa-solid fa-trash text-red-400 hover:text-red-500"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
