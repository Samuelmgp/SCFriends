/* React & Types & Enums Imports */
import { useState } from "react"
import type { dataSnapshot, Friend } from "./types";

/* Utilities Imports */
import { search, updateSelectGroup } from "./utils/search";
import search_init from "./utils/search";

/* Components Imports */
import InputField from "./components/JSONInputField"
import FriendItem from "./components/FriendItem";
import SearchBar from "./components/SearchBar";
import ViewSelectedField from "./components/ViewSelectedField";




function App() { 
  const [displaying, setDisplaying] = useState<Friend[]>([]);

  function handleOnParsed(data: dataSnapshot): void {
    console.log("Parsed Data: ", data);
    const display = search_init(data);
    setDisplaying(display);
  }

  function handleSearch(term: string): void {
    search(term, setDisplaying)
  }

  function handleUpdatedSelections(enum_key: string, value: boolean): void{
    updateSelectGroup(enum_key, value, setDisplaying);
  }

  return (
    <>
      <div className="ms-5 mt-10">
        <h1 className="text-5xl font-bold">Snapchat Friends</h1>
        <p className="mt-2 text-gray-600">
          Easily search through your Snapchat friends by username or display name. <br />
          You can also filter based on date added and friendship status.
        </p>
      </div>

      <div className="flex items-center gap-2 mt-10 mx-5">
        <h2 className="text-lg font-bold">File Upload:</h2>
        <InputField label="Select File" type="file" onParsed={handleOnParsed}/>
      </div>
      
      <SearchBar onSearch={handleSearch} />

      <ViewSelectedField onSelected={handleUpdatedSelections}/>
      <div>
        {displaying !== null && displaying.length > 0 ? (
          <p className="mx-5 mt-5 text-gray-600">Displaying: {displaying.length} results</p>
        ) : (
          <p className="mx-5 mt-5 text-gray-600">Nothing to display. Please upload a file and/or adjust your search criteria.</p>
        )}
      </div>
      <div id="Friends-Container" className="mx-5 mt-5 overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2 block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative ">
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Name</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Username</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Date Added</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Date Changed</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Source</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {displaying !== null && displaying.map((friend: Friend, index: number) => (<FriendItem key={index} friend={friend} />))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
