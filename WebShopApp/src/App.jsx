import SearchBar from "/components/searchbar.tsx"
import ItemRender from '/components/itemRender.tsx'
import './App.css'
import React from "react";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar setSearch={setSearch} search={search}/>
      <ItemRender/>
      <h1>{search}</h1>
    </>
  )
}

export default App
