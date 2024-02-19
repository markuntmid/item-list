import { FC } from "react"
import Avatar from "../../atoms/Avatar";
import ShareButton from "../../atoms/ShareButton";
import Title from "../../molecules/Title";
import ItemList from "../../organisms/ItemList";
import FacebookButton from "../../atoms/FacebookButton";
import XButton from "../../atoms/XButton";

// TODO: export to avoid duplication
interface Category {
    id: string
    category: string
    name: string
    count: number
}

// TODO: export to avoid duplication
interface List {
    bakery?: Category[],
    beverages?: Category[],
    vegtables?: Category[],
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Homepage: FC<List | any> = ({ data }) => {  
    return (<div className="pt-14 pb-14 bg-zinc-50 w-full h-full flex items-center flex-col">
        <Avatar />
        {/* TODO: create molecule */}
        <div className="pt-6 text-center">
            {/* TODO: create atoms */}
            <div className="text-3xl">Home</div>
            <p className="text-base text-neutral-400">Created 2 days ago</p>
        </div>
        <div className="pt-6">
            <ShareButton />
        </div>
        
        {/* TODO: create molecule */}
        <div className="pt-6">
            <Title name={"Vegetables"} count={"0"} total={"0"} />
            <ItemList list={data.vegtables} />
        </div>
        <div className="pt-6">
            <Title name={"Beverages"} count={"0"} total={"0"} />
            <ItemList list={data.beverages} />
        </div>
        <div className="pt-6">
            <Title name={"Bakery"} count={"0"} total={"0"} />
            <ItemList list={data.bakery} />
        </div>

        {/* TODO: create molecule */}
        <div className="pt-14">
            <p className="text-base text-neutral-400 text-center">Follow us</p>
            {/* TODO: create molecule */}
            <div className="flex gap-3 pt-3">
                <FacebookButton />
                <XButton />
            </div>
        </div>
    </div>)
}

export default Homepage;
