export type Friend = {
    username: string;
    displayName: string;
    dateAdded: string;
    dateChanged?: string | "Unchanged";
    source?: string | "Unknown";
}

export type dataSnapshot = {
    name: string;
    created: string;
    Friends: Friend[];
    Blocked: Friend[];
    Deleted: Friend[];
    Pending: Friend[];
}

export type testSnapshot = {
    id: string;
    name: string;
    date: string;
}