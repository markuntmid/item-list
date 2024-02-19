import { FC } from 'react'
import '../../../index.css'
import Item from '../../molecules/Item'

// TODO: export to avoid duplication
interface Category {
  id: string
  category: string
  name: string
  count: number
}
const ItemList: FC<Category[] | any> = ({ list }) => {
    console.log(list);
    
    return (<div className="grid divide-y divide-netural-100 bg-white rounded-2xl p-4">
        {/* TODO: convert to atom */}
        {            
            list ? 
            list.map((item: Record<string, string>, i: string) => <span key={"item-" + i}><Item name={item.name} multiplayer={item.count} /></span>) : ""
        }
    </div>); 
}

export default ItemList;
