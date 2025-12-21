import type { dataSnapshot, Friend } from "../types";

function toFriend(raw: any, status: string): Friend {
    return {
        username: raw.username || raw.Username || raw.userName || "",
        status: status || "gray",
        displayName: raw.displayName || raw["Display Name"] || raw.display_name || "",
        dateAdded: raw.dateAdded || raw["Creation Timestamp"] || "",
        dateChanged: raw.dateChanged || raw["Last Modified Timestamp"] || "Unchanged",
        source: raw.source || raw.Source || "Unknown",
    };
}

export function toSnapshot(fileName: string, raw: any): dataSnapshot {
    const friendsList: Friend[] = (raw["Friends"] || []).map((friend: any) => ({
        ...toFriend(friend, "green")
    }));
    const blockedList: Friend[] = (raw["Blocked Users"] || []).map((friend: any) => ({
        ...toFriend(friend, "orange")
    }));
    const removedList: Friend[] = (raw["Deleted Friends"] || []).map((friend: any) => ({
        ...toFriend(friend, "red")
    }));
    const pendingList: Friend[] = (raw["Pending Requests"] || []).map((friend: any) => ({
        ...toFriend(friend, "gray")
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