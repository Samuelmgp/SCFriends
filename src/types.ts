export type Friend = {
    status: string | "gray";
    username: string;
    displayName: string;
    dateAdded: string;
    dateChanged?: string | "Unchanged";
    source?: string | "Unknown";
}

export type dataSnapshot = {
    name: string;
    created: string;
    all: Friend[];
    Friends: Friend[];
    Blocked: Friend[];
    Deleted: Friend[];
    Pending: Friend[];
}