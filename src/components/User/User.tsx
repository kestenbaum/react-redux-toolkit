import React, {FC} from 'react';
import {IUser} from "../../models";

const User: FC<IUser> = (props) => {
    const {id, name, username, email} = props
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
        </div>
    );
};

export default User;