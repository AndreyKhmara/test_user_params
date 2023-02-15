import React, {FC, useRef, useState} from 'react'

const EventsExample:FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement> ) =>{
        // console.log(value)
        console.log(inputRef.current?.value)
    } 

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        console.log('drag');        
    }

    const dragWidthPreventHandler = (e:React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e:React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e:React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setIsDrag(false)
    }
   

  return (
    <div>
        <input type="text" value={value} onChange={changeHandler} />
        <input ref={inputRef} type="text" placeholder="jora" />
        <button onClick={clickHandler}>x</button>
        <div onDrag={dragHandler} draggable style={{width:'200px', height:'200px', background: 'red'}}></div>
        <div onDrop={dropHandler} 
        onDragLeave={leaveHandler} 
        onDragOver={dragWidthPreventHandler}
        style={{width:'200px', height:'200px', background: isDrag ? 'blue':'red', marginTop: '10px'}}></div>
    </div>
  )
}

export default EventsExample