import { FC } from 'react'
import '../../../index.css'

const Multiplayer: FC<{ number: string }> = ({ number = "0" }) => {
    return (<div className="bg-white text-neutral-400 pl-3 pr-4 leading-5 font-normal flex">
        <div>x &nbsp;</div>
        <div className='min-w-5'>{ number }</div> 
    </div>);
}

export default Multiplayer;
