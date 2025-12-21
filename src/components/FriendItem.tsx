import type { Friend } from "../types";

export default function FriendItem({ friend }: { friend: Friend }) {

    return (
        <tr className="odd:bg-gray-200 even:bg-gray-100 hover:bg-green-100">
            <td className="p-2 border-none">{friend.displayName}</td>
            <td className="p-2 border-none">{friend.username}</td>
            <td className="p-2 border-none">{friend.dateAdded}</td>
            <td className="p-2 border-none">{friend.dateChanged}</td>
            <td className="p-2 border-none">{friend.source}</td>
        </tr>
    )
}