import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Gradient from './Gradient';

const CircleProgress = () => {

    const [percentage, setPercentage] = useState(20)
    const idCSS = "hello";
    const changeProgress = () => {
        let per = Math.floor((Math.random() * 100) + 1);

        setPercentage(per)
    }
    return (
        <>
            <div className='w-32 h-32  relative '>

                <Gradient />

                <CircularProgressbar value={percentage}
                    styles={buildStyles({
                        strokeLinecap: "butt",
                        path: { stroke: `url(#${idCSS})`, height: "100%" },
                        trail: {
                            stroke: "#2e2e2e"
                        }
                    })}

                    strokeWidth={12}

                    text={`${percentage}%`} />
                <button className='bg-slate-200 px-10 py-2 rounded-lg mt-10' onClick={changeProgress}>play</button>
            </div >
        </>
    )
}

export default CircleProgress