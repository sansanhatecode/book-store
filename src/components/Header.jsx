import React from "react";

export default function Header() {

    return (
        <div className="flex justify-between px-7 py-2 border-b-2 border-white">
            <h1 className="text-3xl font-extrabold">Bookstore</h1>
            <div className="flex justify-center items-center">
            <span>
                <i className="fa-solid fa-circle-user
                    text-3xl px-2">
                </i>
                </span>
            <p className="text-sm">Sansan</p>
            </div>
        </div>
    )
}