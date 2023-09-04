import React from 'react';

export type SearchEngineProps = {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function SearchEngine({ search, setSearch }: SearchEngineProps) {
    return (
        <div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}