export type Friend = {
    username: string;
    displayName: string;
    dateAdded: Date;
    dateChanged?: Date;
    source?: string;
}

export type dataSnapshot = {
    name: string;
    created: Date;
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