import React from 'react'
import { SearchIcon } from '../icons'

const SearchInput = () => {
    return (
        <div className="bg-grey px-2 py-2 md:px-4 md:py-3 items-center rounded-full hidden md:flex">
            <SearchIcon />
            <input type="search" className='outline-none md:px-3 px-2 bg-transparent' placeholder='search...' />
        </div>
    )
}

export default SearchInput