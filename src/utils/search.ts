import type { Friend, dataSnapshot } from "../types";
import { FRIENDS, BLOCKED, REMOVED, PENDING } from "../enums";

let parsedJSON: dataSnapshot | null = null;
let display: Friend[] = []

let selectFriends = true;
let selectBlocked = true;
let selectRemoved = true;
let selectPending= true;

let search_term: string = "";

function filterByGroup(): Friend[]{
    display = [];
    console.log("Filtering by group with settings:", {selectFriends, selectBlocked, selectRemoved, selectPending}, "search:", search_term, "parseData not null:", parsedJSON !== null);
    if (selectFriends && selectBlocked && selectRemoved && selectPending && parsedJSON && search_term === ""){display = parsedJSON.all; return parsedJSON.all;}
    if (selectFriends && parsedJSON) display = [...display, ...parsedJSON.Friends];
    if (selectBlocked && parsedJSON) display = [...display, ...parsedJSON.Blocked];
    if (selectRemoved && parsedJSON) display = [...display, ...parsedJSON.Deleted];
    if (selectPending && parsedJSON) display = [...display, ...parsedJSON.Pending];
    if (search_term !== ""){
        console.log("Filtering with search term:", search_term, display);
        return display.filter(friend => 
            friend.displayName.toLowerCase().includes(search_term) ||
            friend.username.toLowerCase().includes(search_term)
        );
    }
    console.log("Display:", display);
    return display;
}

export function updateSelectGroup(enum_group: string, value: boolean, setDisplaying: (friends: Friend[]) => void): void {
    if (enum_group === FRIENDS) selectFriends = value;
    if (enum_group === BLOCKED) selectBlocked = value;
    if (enum_group === REMOVED) selectRemoved = value;
    if (enum_group === PENDING) selectPending = value;
    setDisplaying(filterByGroup());
    return;
}

export function search(term: string, setDisplaying: (friends: Friend[]) => void): void {
    search_term = term.toLowerCase();
    if (term === ""){setDisplaying(display); return;};
    
    const filtered = display.filter(friend =>
        friend.username.toLowerCase().includes(search_term) ||
        friend.displayName.toLowerCase().includes(search_term)
    );
    setDisplaying(filtered);
}

export default function(parsedData: dataSnapshot): Friend[]{
    console.log("Initializing Search Functionality")
    parsedJSON = parsedData;
    
    if (selectFriends && selectBlocked && selectRemoved && selectPending){
        display = parsedData.all;
        return parsedJSON.all;
    }else{
        return filterByGroup()
    }
}