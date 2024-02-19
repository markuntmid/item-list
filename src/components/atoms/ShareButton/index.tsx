import { FC } from 'react';

const ShareButton: FC = () => {
    return (<div className="w-11 h-11 bg-white rounded-full flex items-center justify-center">
        <div className="w-5 h-5 bg-share-icon"></div>
    </div>);
}

export default ShareButton;
