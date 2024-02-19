import { FC } from 'react'
import '../../../index.css'
import Counter from '../../atoms/Counter';

interface Props {
    name: string
    // TODO: { count, total } new type with union
    count: string
    total: string
}

const Title: FC<Props> = ({ name = "", count = "0", total = "0" }) => {
    return (<div className="p-4 grid grid-cols-2">
        {/* TODO: convert to atom */}
        <div className="text-base font-bold row-start">{ name }</div>
        <div className="justify-end justify-items-end col-end-4">
            <Counter count={count} total={total} />
        </div>
    </div>); 
}

export default Title;
