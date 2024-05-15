import SearchBar from "/components/searchbar.tsx"
import ItemRender from '/components/itemRender.tsx'
import './App.css'
import React from "react";
import { useState } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <ItemRender   searchTerm={searchTerm}/>
       
    </>
  )
}

export default App
