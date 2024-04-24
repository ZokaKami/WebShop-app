import SearchBar from "/components/searchbar.tsx"
import ItemRender from '/components/itemRender.tsx'
import './App.css'
import React from "react";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("test");

  return (
    <>
      <SearchBar setSearch={setSearch} search={search}/>
      <ItemRender setSearch={setSearch} search={search}/>
       
    </>
  )
}

export default App
