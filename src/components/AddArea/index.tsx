import * as C from './styles'
import { useState, KeyboardEvent } from 'react'

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inpuText, setInputText] = useState('')
    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === "Enter" && inpuText !== "") {
            onEnter(inpuText)
            setInputText('')
        }
    }


    return (
        <C.Container>
            <div className='image'>➕</div>
            <input type="text" placeholder="Adicione uma tarefa" value={inpuText} onChange={e => setInputText(e.target.value)} onKeyUp={handleKeyUp}></input>
        </C.Container>
    )
}