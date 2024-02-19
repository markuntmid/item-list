import { FC, useState } from 'react'
import '../../../index.css'
import Checked from '../../atoms/Checked';
import NotChecked from '../../atoms/NotChecked';

const Checkbox: FC = () => {
    const [checkboxState, setCheckboxState] = useState(false);

    return (<div className="cursor-pointer" onClick={() => setCheckboxState(!checkboxState)}>
        {
            checkboxState ? 
            <Checked/>:
            <NotChecked />
        }
    </div>);
}

export default Checkbox;
