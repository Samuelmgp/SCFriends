import type { dataSnapshot, Friend } from "../types";

function toFriend(raw: any, status: string): Friend {
    return {
        username: raw.username || raw.Username || raw.userName || "",
        status: status || "bg-gray-300",
        displayName: raw.displayName || raw["Display Name"] || raw.display_name || "",
        dateAdded: raw.dateAdded || raw["Creation Timestamp"] || "",
        dateChanged: raw.dateChanged || raw["Last Modified Timestamp"] || "Unchanged",
        source: raw.source || raw.Source || "Unknown",
    };
}

export function toSnapshot(fileName: string, raw: any): dataSnapshot {
    const friendsList: Friend[] = (raw["Friends"] || []).map((friend: any) => ({
        ...toFriend(friend, "bg-green-300")
    }));
    const blockedList: Friend[] = (raw["Blocked Users"] || []).map((friend: any) => ({
        ...toFriend(friend, "bg-red-300")
    }));
    const removedList: Friend[] = (raw["Deleted Friends"] || []).map((friend: any) => ({
        ...toFriend(friend, "bg-orange-300")
    }));
    const pendingList: Friend[] = (raw["Pending Requests"] || []).map((friend: any) => ({
        ...toFriend(friend, "bg-gray-300")
    }));

    const date = new Date();
    const currentDate = date.toLocaleDateString();

    return {
        name: fileName || "Unnamed Snapshot",
        created: currentDate,
        all: [...friendsList, ...blockedList, ...removedList, ...pendingList],
        Friends: friendsList,
        Blocked: blockedList,
        Deleted: removedList,
        Pending: pendingList,
    };
}