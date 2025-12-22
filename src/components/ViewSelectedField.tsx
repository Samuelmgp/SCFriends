import Radio from "./Radio"
import { FRIENDS, BLOCKED, REMOVED, PENDING } from "../enums"

export default function ViewSelectedField ({ onSelected } : {onSelected : (enum_value: string, selected: boolean) => void }) {

    return (
        <div className="ml-5 mt-5 flex gap-10">
            <Radio label="Friends" enum_value={FRIENDS} color="green-200" style="hover:bg-green-300" onSelected={onSelected}/>
            <Radio label="Blocked" enum_value={BLOCKED} color="red-200" style="hover:bg-red-300" onSelected={onSelected}/>
            <Radio label="Removed" enum_value={REMOVED} color="orange-200" style="hover:bg-orange-300" onSelected={onSelected}/>
            <Radio label="Pending" enum_value={PENDING} color="gray-200" style="hover:bg-gray-300" onSelected={onSelected}/>
        </div>
    )

}