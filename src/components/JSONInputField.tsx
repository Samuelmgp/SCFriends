import {useState, useRef} from "react";
import { parseJSON } from "../utils/parseJSON";
import type { dataSnapshot } from "../types";

interface InputFieldProps {
    label: string;
    placeholder?: string;
    type?: string;
    onParsed: (data: dataSnapshot) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder = "", type = "application/json", onParsed }) => {
    const [fileName, setFilename] = useState<string>("");
    const [warn, setWarn] = useState<boolean>(false);
    const inputRef = useRef<null | HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : "";
        /* Special Check */
        if (file && file.name.endsWith(".json")){
            warn && setWarn(false);
            setFilename(file.name);

            // Parse JSON File
            parseJSON({jsonFile: file, onParsed});
        } else {
            setFilename("");
            if (file && file.name !== "") setWarn(true);
        }
    };

    const handleLabelClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    return (
        <div className="flex gap-2 items-center">
            {fileName && <span className="text-green-800">{fileName}</span>}
            {warn && <span className="text-red-500">Please select a valid JSON file.</span>}
            <label className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 active:bg-blue-700" onClick={handleLabelClick}>{label}</label>
            <input
                ref={inputRef}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                className="hidden"
            />
        </div>
    );
};

export default InputField;

