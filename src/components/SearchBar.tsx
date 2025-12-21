export default function SearchBar({ onSearch }: { onSearch: (term: string) => void }) {
    return (
        <div className="mt-5 mx-5 flex gap-2 items-center">
            <label htmlFor="search" className="font-bold">Search:</label>
            <input
                id="search"
                type="text"
                onChange={(e) => onSearch(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Search by username or display name..."
            />
        </div>
    );
}