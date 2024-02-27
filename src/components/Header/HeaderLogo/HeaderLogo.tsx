import React, {FC} from 'react';

interface IHeaderLogo {
    children: string
}

const HeaderLogo:FC<IHeaderLogo> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default HeaderLogo;