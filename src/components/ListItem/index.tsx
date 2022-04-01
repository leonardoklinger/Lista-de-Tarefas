import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'

type props = {
    item: Item
}

export const ListItem = ({ item }: props ) => {
    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <C.Container done={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)}></input>
            <label>{item.name} - {item.done.toString()}</label>
        </C.Container>
    )
}