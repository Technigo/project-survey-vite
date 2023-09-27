import { useState } from "react"

export const Wish = () => {

    const [wish, setWish] = useState('');

    return (
        <form>
            <select
                value={wish}
                onChange={(event) => setWish(event.target.value)}
            >
                <option value="">Make a wish:</option>
                <option value="endless joy">endless joy</option>
                <option value="everlasting cheer">everlasting cheer</option>
                <option value="eternal glee">eternal glee</option>
                <option value="perpetual delight">perpetual delight</option>

            </select>
        </form>
    )
}
