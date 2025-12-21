function App() {
  return (
    <>
      <div className="ms-5 mt-5">
        <h1 className="text-2xl font-bold">Snapchat Friends</h1>
        <p className="mt-2 text-gray-600">
          Easily search through your Snapchat friends by username or display name. <br />
          You can also filter based on date added and friendship status.
        </p>
      </div>

      <div className="flex items-center gap-2 mt-10 mx-5">
        <h2 className="text-lg font-bold">File Upload:</h2>
        <button id="uploadButton" className="bg-cyan-500 text-white px-4 py-2 rounded">Upload</button>
        <input id="contentFile" type="file" accept=".json"/>
      </div>
    </>
  )
}

export default App
