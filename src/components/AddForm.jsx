import React from "react";

export default function AddForm(props) {
    const{
        openAdd,
        cancelAddOnClickHandler,
        createButtonOnClickHandler,
        nameOnChangeHandler,
        authorOnChangeHandler,
        topicOnChangeHandler,
    } = props
    return (
        openAdd &&
        <div className="fixed w-[100vW] h-[100vh] top-0">
            <form 
                className="flex flex-col w-[500px] px-7 py-10 bg-white m-auto relative top-32 rounded-lg"
                onSubmit={(e) => createButtonOnClickHandler(e)}
            >
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">Add book</h2>
                    <span
                        onClick={()=>cancelAddOnClickHandler()}
                    ><i className="fa-solid fa-xmark text-red-300 text-2xl hover:text-red-400"></i></span>
                </div>
                <label 
                    for="fname"
                    className="mt-5"
                >Name</label>
                <input 
                    type="text" 
                    id="fname" 
                    name="fname"
                    className="border-red-200 border-2 rounded-md h-8"
                    required
                    onChange={(e) => {
                        {nameOnChangeHandler(e.target.value)}
                        e.preventDefault()
                        // console.log((e.target.value))
                    }}
                />
                <label 
                    for="fauthor"
                    className="mt-5"
                >Author</label>
                <input 
                    type="text" 
                    id="fauthor" 
                    name="fauthor"
                    className="border-red-200 border-2 rounded-md h-8"
                    required
                    onChange={(e) => {
                        {authorOnChangeHandler(e.target.value)}
                        e.preventDefault()
                        // console.log((e.target.value))
                    }}
                />
                <label 
                    for="ftopic"
                    className="mt-5"
                >Topic</label>
                <select 
                    name="ftopic" 
                    id="ftopic"
                    className="border-red-200 border-2 mb-10 rounded-md h-8"
                    onChange={(e) => {
                        {topicOnChangeHandler(e.target.value)}
                        e.preventDefault()
                        // console.log((e.target.value))
                    }}
                >
                    <option value="programming">Programming</option>
                    <option value="database">Database</option>
                    <option value="devops">DevOps</option>
                </select>
                <button 
                    type="submit" 
                    value="Create"
                    className="bg-red-300 text-white h-10 w-[150px] p-2 m-auto rounded-md hover:bg-red-400 hover:font-bold"
                    // onClick={(e)=>{
                    //     createButtonOnClickHandler(e.currentTarget)
                    // }}
                >
                    Create
                </button>
            </form>
        </div>
    )
}