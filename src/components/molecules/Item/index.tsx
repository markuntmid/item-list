import { FC } from 'react'
import '../../../index.css'
import Checkbox from '../Checkbox';
import Multiplayer from '../../atoms/Multiplayer';

const Item: FC<{ name: string, multiplayer: string }> = ({ name = "", multiplayer = "" }) => {
    return (<div className="p-4 grid grid-cols-2">
        <div className='flex'>
            <Checkbox />
            <div className="pl-3 text-base font-bold">{ name }</div>
        </div>
        <div className="justify-end justify-items-end col-end-4">
            <Multiplayer number={multiplayer} />
        </div>
    </div>); 
}

export default Item;
