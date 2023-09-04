import React, { useState } from 'react'
import '../../App.css'
import styled from 'styled-components';
import { keyframes } from 'styled-components';


const MovingSquare = () => {


    const [start, setStart] = useState(false);

    const moveBox = () => {
        console.log(start)
        setStart(!start)
        if (start === false) {

            document.getAnimations()[0].pause()
        }
        if (start === true) {
            document.getAnimations()[0].play()
        }



    }




    return (
        <div className='w-2/4 '>
            <div className='w-80 h-80  relative'>

                <MovingBox>
                    <div className='bg-violet-950 w-20 h-20 absolute moving-box rounded-md'> </div>
                </MovingBox >

                {start === true ? <button className='bg-slate-200 px-10 py-2 rounded  ' onClick={moveBox}>play</button> : <button className='bg-slate-200 px-10 py-2 rounded-lg' onClick={moveBox}>pause</button>}
            </div >
        </div>
    )
}


const Moving = keyframes`

0% {
    left: 0px;
    top: 0px;
}

25% {
    left: 240px;
    top: 0px;
}

50% {
    left: 240px;
    top: 240px;
}

75% {
    left: 0px;
    top: 240px;
}

100% {
    left: 0px;
    top: 0px;
}

`
const MovingBox = styled.div`
width: 100px;
height: 100px;
position: relative;
animation:${Moving} 4s linear infinite;
`;

export default MovingSquare