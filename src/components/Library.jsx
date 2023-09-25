import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Add from "./Add";
import RenderTable from "./RenderTable";
import Delete from "./Delete";
import AddForm from "./AddForm";

export default function Library() {
    const initialData = [
        {
            id: 1,
            name: 'Refactoring',
            author: 'Martin Fowler',
            topic: 'Programming'
        },
        {
            id: 2,
            name: 'Designing Data-Intensive Applications',
            author: 'Martin Kleppmann',
            topic: 'Database'
        },
        {
            id: 3,
            name: 'The Phoenix Project',
            author: 'Gene Kim',
            topic: 'DevOps'
        }
    ]
    const [data, setData] = useState(initialData)
    //search input
    const [searchContent, setSearchContent] = useState('')
    const [openDelete, setOpenDelete] = useState(false)
    const [deleteId, setDeleteId] = useState('')
    const [openAdd, setOpenAdd] = useState(false)
    // form input
    const [fname, setFname] = useState('')
    const [fauthor, setFauthor] = useState('')
    const [ftopic, setFtopic] = useState('Programming')

    const searchedBooks = data?.filter(book => book.name.toLowerCase().includes(searchContent.toLowerCase()));

    function deleteButtonOnClickHandler(id){
        setOpenDelete(true)
        setDeleteId(id)
    }

    function onSearchHandler(searchContent){
        setSearchContent(searchContent)
    }

    const cancelButtonOnClickHandler = () => {
        setOpenDelete(false)
    }

    const confirmButtonOnClickHandler = () =>{
        console.log(deleteId)
        setData(data.filter(book => book.id !== Number(deleteId)))
        setOpenDelete(false)
    }

    const addButtonOnClickHandler = () =>{
        setOpenAdd(true)
    }

    var index = 3;

    const cancelAddOnClickHandler = () => {
        setOpenAdd(false)
    }

    const nameOnChangeHandler = (fname) => {
        setFname(fname)
    }

    const authorOnChangeHandler = (author) => {
        setFauthor(author)
    }

    const topicOnChangeHandler = (topic) => {
        setFtopic(topic)
    }

    const createButtonOnClickHandler = (e) => {
        e.preventDefault()
        const newBooks = {
            id : ++index,
            name : {fname},
            author : {fauthor},
            topic : {ftopic},
        }
        console.log(newBooks)
        console.log(data)
        setData(data.push(newBooks))
        setOpenAdd(false)
        // setData(data.push(newBooks))
    }
    
    return (
        <div>
            <Header></Header>
            <div className="my-12 flex justify-end mx-8">
                <SearchBar 
                    onSearchHandler={onSearchHandler}
                    searchContent={searchContent}
                />
                <Add
                    addButtonOnClickHandler={addButtonOnClickHandler}
                />
            </div>
            <RenderTable
                books={searchedBooks}
                deleteButtonOnClickHandler={deleteButtonOnClickHandler}
            />
            <Delete
                books={data}
                id={deleteId}
                openDelete={openDelete}
                cancelButtonOnClickHandler={cancelButtonOnClickHandler}
                confirmButtonOnClickHandler={confirmButtonOnClickHandler}
            />
            <AddForm
                openAdd={openAdd}
                cancelAddOnClickHandler={cancelAddOnClickHandler}
                createButtonOnClickHandler={createButtonOnClickHandler}
                nameOnChangeHandler={nameOnChangeHandler}
                authorOnChangeHandler={authorOnChangeHandler}
                topicOnChangeHandler={topicOnChangeHandler}
            />
        </div>
    )
}