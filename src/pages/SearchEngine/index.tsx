import React from 'react';

import styles from './searchengine.module.scss'
import { LuSearch } from 'react-icons/lu'

export type SearchEngineProps = {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    placeholder: string
}

export function SearchEngine({ search, setSearch, placeholder }: SearchEngineProps) {
    return (
        <div className={styles.searchengine }>
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder={placeholder} />
            <LuSearch size={20} color='#111' />
        </div>
    )
}