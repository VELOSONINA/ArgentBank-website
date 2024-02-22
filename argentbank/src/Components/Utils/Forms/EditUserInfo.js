import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../Button";
import { editUserInfo } from "../../../Api/Authentication"

export default function EditUserInfo() {
    const { userName, firstName, lastName, token } = useSelector(state => state.user.user)
    const [isActive, setIsActive] = useState(true);
    const [initUserName, setInitUserName] = useState("");
    const dispatch = useDispatch()

     // Fonction pour sauvegarder et fermer le formulaire
    const saveCloseForm = () => {
        console.log("saveCloseForm")
        console.log("userName", userName)
        console.log("token", token)
        dispatch(editUserInfo({ userName: initUserName, token: token }));
        setIsActive(current => !current);
        // setIsActive(false);
        console.log("isActive", isActive)
    };

   // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(editUserInfo({ userName: initUserName, token: token }));
        saveCloseForm();
    };
    
    useEffect(() => {
        setInitUserName(userName);
    }, [userName]);


    return (
        <div style={{display: isActive ?  'block' : 'none' }}>
            <div className="headerInfo" >
                <h1>Edit user info</h1>
            </div>
            <div className="userName_form">
                <form onSubmit={handleSubmit}
                     className="userName_form"
                    id="userNameEdit"
                >
                    <div className="user_input">
                        <div className="userName_input">
                            <label htmlFor="userName" className="labelFormSignin">User name: </label>
                            <input
                                type="text"
                                id="userName"
                                value={initUserName}
                                onChange={(e) => setInitUserName(e.target.value)}
                            />
                        </div>
                        <div className="userName_input">
                            <label htmlFor="firstName" className="labelFormSignin">First name: </label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => e.preventDefault()}
                                disabled
                            />
                        </div>
                        <div className="userName_input">
                            <label htmlFor="lastName" className="labelFormSignin">Last name: </label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => e.preventDefault()}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="userNameButton">
                        <Button
                            className="editUserButton"
                            type="onClick"
                            children="Save"
                            onClick={handleSubmit}
                            // onClick={(e) => {
                            //     e.preventDefault();
                            //     dispatch(editUserInfo({ userName: initUserName, token: token }))
                            //     saveCloseForm();
                            // }}
                        />
                        <Button
                            className="editUserButton"
                            type="onClick"
                            children="Cancel"
                            onClick={() => setIsActive(false)}
                            // onClick={(e) => {
                            //     // e.preventDefault();
                            //     // saveCloseForm();
                            // }}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}