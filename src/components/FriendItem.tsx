import type { Friend } from "../types";

export default function FriendItem({ friend }: { friend: Friend }) {

    return (
        <tr>
            <td>{friend.displayName}</td>
            <td>{friend.username}</td>
            <td>{friend.dateAdded}</td>
            <td>{friend.dateChanged}</td>
            <td>{friend.source}</td>
        </tr>
    )
}