import type { dataSnapshot, Friend } from "../types";

function toFriend(raw: any): Friend {
    return {
        username: raw.username || raw.Username || raw.userName || "",
        displayName: raw.displayName || raw["Display Name"] || raw.display_name || "",
        dateAdded: raw.dateAdded || raw["Creation Timestamp"] || "",
        dateChanged: raw.dateChanged || raw["Last Modified Timestamp"] || "Unchanged",
        source: raw.source || raw.Source || "Unknown",
    };
}

export function toSnapshot(fileName: string, raw: any): dataSnapshot {
    const friendsList: Friend[] = (raw["Friends"] || []).map(toFriend);
    const blockedList: Friend[] = (raw["Blocked Users"] || []).map(toFriend);
    const removedList: Friend[] = (raw["Removed Friends"] || []).map(toFriend);
    const pendingList: Friend[] = (raw["Pending Requests"] || []).map(toFriend);

    const date = new Date();
    const currentDate = date.toLocaleDateString();

    return {
        name: fileName || "Unnamed Snapshot",
        created: currentDate,
        Friends: friendsList,
        Blocked: blockedList,
        Deleted: removedList,
        Pending: pendingList,
    };
}