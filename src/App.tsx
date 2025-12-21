import InputField from "./components/JSONInputField"

function App() { 
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
        <InputField label="Select File" type="file" />
      </div>
    </>
  )
}

export default App
