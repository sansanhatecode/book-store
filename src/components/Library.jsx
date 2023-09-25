import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Add from "./Add";
import RenderTable from "./RenderTable";
import Delete from "./Delete";
import AddForm from "./AddForm";

export default function Library() {

    const initialBook = [
        {
            name: 'Refactoring',
            author: 'Martin Fowler',
            topic: 'Programming'
        },
        {
            name: 'Designing Data-Intensive Applications',
            author: 'Martin Kleppmann',
            topic: 'Database'
        },
        {
            name: 'The Phoenix Project',
            author: 'Gene Kim',
            topic: 'DevOps'
        }
    ]

    const [data, setData] = useState(() => {
        if(localStorage.getItem('books')){
            const storageData = JSON.parse(localStorage.getItem('books'))
            return storageData
        }
        else return initialBook
    })
    //search input
    const [searchContent, setSearchContent] = useState('')

    const [openDelete, setOpenDelete] = useState(false)
    const [deleteId, setDeleteId] = useState('')
    const [openAdd, setOpenAdd] = useState(false)
    // form input
    const [fname, setFname] = useState('')
    const [fauthor, setFauthor] = useState('')
    const [ftopic, setFtopic] = useState('Programming')

    function deleteButtonOnClickHandler(id) {
        setOpenDelete(true)
        setDeleteId(id)
        console.log(id)
    }

    const searchedBooks = data.filter(book => book.name.toLowerCase().includes(searchContent.toLowerCase()));

    function onSearchHandler(searchContent) {
        setSearchContent(searchContent)
    }

    const cancelButtonOnClickHandler = () => {
        setOpenDelete(false)
    }

    const confirmButtonOnClickHandler = () => {
        const newDataDlt = JSON.parse(localStorage.getItem('books'));
        console.log(deleteId)
        newDataDlt.splice(deleteId, 1)
        // console.log(newDataDlt)
        const jsonNewDataDlt = JSON.stringify(newDataDlt);
        localStorage.setItem("books", jsonNewDataDlt);
        // console.log(jsonNewDataDlt)
        setData(newDataDlt);
        setOpenDelete(false)
        // console.log(deleteId)
    }

    const addButtonOnClickHandler = () => {
        setOpenAdd(true)
    }

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
            name: fname,
            author: fauthor,
            topic: ftopic,
        }
        console.log(newBooks)
        console.log(data)
        setData(prevData => {
            const newData = [...prevData, newBooks]
            const jsonData = JSON.stringify(newData)
            localStorage.setItem("books", jsonData)
            return newData
        })
        setOpenAdd(false)
        setFname('')
        setFauthor('')
        setFtopic('Programing')
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