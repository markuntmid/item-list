import { FC } from 'react'
import '../../../index.css'

interface Props { count: string, total: string }

const Counter: FC<Props> = ({ count = "0",  total = "0" }) => {
    return (<div className="text-neutral-400 pl-3 pr-4 leading-5 font-normal">{ count + " / " + total }</div>);
}

export default Counter;
