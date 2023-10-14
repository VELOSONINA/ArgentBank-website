import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData, selectEditUser } from "../../reducers/selectors.js";
import { toggleEdit } from "../../reducers/editUserSlice.js";
import { EditForm } from "../Forms/editForm";
import { userProfileInfo } from "../../api/userApi";
import { useEffect } from "react";
import { saveUserData } from "../../reducers/userDataSlice.js";

function UserProfileHeader() {
  const userData = useSelector(selectUserData);
  const editData = useSelector(selectEditUser);
  const dispatch = useDispatch();
  const isLogging = localStorage.getItem("token");

  useEffect(() => {
    if (isLogging) {
      const getData = async () => {
        userProfileInfo(isLogging).then((response) =>
          dispatch(saveUserData(response.data.body))
        );
      };
      getData();
    }
  }, [dispatch, isLogging]);

  return (
    <div className="header">
      {editData.open === true ? (
        <h1>Edit user info</h1>
      ) : (
        <h1>
          Welcome back
          <br />
          {`${userData.firstName} ${userData.lastName}`}
        </h1>
      )}
      {editData.open === true ? null : (
        <Button className="edit-button" onClick={() => dispatch(toggleEdit())}>
          Edit name
        </Button>
      )}

      {editData.open === true ? <EditForm /> : null}
    </div>
  );
}
export default UserProfileHeader;
