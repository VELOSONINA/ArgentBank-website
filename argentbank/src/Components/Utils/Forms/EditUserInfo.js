import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../Button";
import { editUserInfo } from "../../../Api/Authentication";

export default function EditUserInfo({ onCancel, onSave  }) {
    const { userName, firstName, lastName, token } = useSelector(state => state.user.user);
    const [isActive, setIsActive] = useState(true);
    const [initUserName, setInitUserName] = useState({
        userName: "",
        firstName: "",
        lastName: ""
    });
    const dispatch = useDispatch();

    useEffect(() => {
        setInitUserName(prev => ({
            ...prev,
            userName: userName,
            firstName: firstName,
            lastName: lastName
        }));
    }, [userName, firstName, lastName]);


    const saveCloseForm = (formData) => {
        console.log("saveCloseForm");
        console.log("formData", formData);
        dispatch(editUserInfo(formData));
        setIsActive(true);
        onSave ();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (initUserName.userName !== userName) {
            saveCloseForm({
                userName: initUserName.userName,
                token: token 
            });
        };
    };

    return (
        <div style={{display: isActive ? 'block' : 'none'}}>
            <div className="headerInfo">
                <h1>Edit user info - {initUserName.userName}</h1>
            </div>
            <div className="userName_form">
                <form onSubmit={handleSubmit} 
                     className="userName_form"
                    id="userNameEdit"
                >
                    <div className="user_input">
                        <div className="userName_input">
                            <label htmlFor="userName" className="labelFormSignin">Username: </label>
                            <input
                                type="text"
                                id="userName"
                                value={initUserName.userName}
                                onChange={(e) => setInitUserName(prev => ({...prev, userName: e.target.value}))}
                            />
                        </div>
                        <div className="userName_input">
                            <label htmlFor="firstName" className="labelFormSignin">First name: </label>
                            <input
                                type="text"
                                id="firstName"
                                value={initUserName.firstName}
                                onChange={(e) => setInitUserName(prev => ({...prev, firstName: e.target.value}))} 
                                disabled
                            />
                        </div>
                        <div className="userName_input">
                            <label htmlFor="lastName" className="labelFormSignin">Last name: </label>
                            <input
                                type="text"
                                id="lastName"
                                value={initUserName.lastName}
                                onChange={(e) => setInitUserName(prev => ({...prev, lastName: e.target.value}))} 
                                disabled
                            />
                        </div>
                    </div>
                    <div className="userNameButton">
                        <Button className="editUserButton" type="submit">Save</Button>
                        <Button className="editUserButton" onClick={onCancel}>Cancel</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
