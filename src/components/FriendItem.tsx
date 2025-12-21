import type { Friend } from "../types";

export default function FriendItem({ friend }: { friend: Friend }) {

    return (
        <tr className={"bg-" + (friend.status && friend.status === "gray" ?  "gray-200" : friend.status + "-300") + " hover:bg-slate-700 hover:text-white"}>
            <td className="p-2 border-none">{friend.displayName}</td>
            <td className="p-2 border-none">{friend.username}</td>
            <td className="p-2 border-none">{friend.dateAdded}</td>
            <td className="p-2 border-none">{friend.dateChanged}</td>
            <td className="p-2 border-none">{friend.source}</td>
        </tr>
    )
}