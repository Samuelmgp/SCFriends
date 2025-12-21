import { useState } from "react"
import InputField from "./components/JSONInputField"
import type { dataSnapshot, Friend } from "./types";
import FriendItem from "./components/FriendItem";


function App() { 
  const [parsedData, setParsedData] = useState<dataSnapshot | null>(null);

  function handleOnParsed(data: dataSnapshot) {
    console.log("Parsed Data: ", data);
    setParsedData(data);
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

      <div id="Friends-Container" className="mx-5 mt-10">
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative ">
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Username</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Display Name</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Date Added</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Date Changed</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Source</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {parsedData !== null && parsedData.Friends.map((friend: Friend, index: number) => (<FriendItem key={index} friend={friend} />))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
