import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData } from "../../reducers/selectors";
import { toggleEdit } from "../../reducers/editUserSlice";
import { editUserName } from "../../reducers/userDataSlice";
import Button from "../Button";

export function EditForm() {
  const [formData, setFormData] = useState({
    userName: "",
    editSuccess: false,
    editError: false,
  });

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const firstName = userData.firstName;
  const lastName = userData.lastName;

  const token = localStorage.getItem("token");

  const editUsername = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {
          userName: formData.userName,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const editData = await response.data;
      dispatch(editUserName(editData.body.userName));

      if (response.status === 200) {
        setFormData({ ...formData, editSuccess: true });
      }
    } catch (error) {
      if (error.response) {
        console.error("Erreur du serveur :", error.response.status, "-", error.response.data.message);
      } else if (error.request) {
        console.error("Pas de réponse du serveur.");
      } else {
        console.error("Erreur :", error.message);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const check = /^[0-9A-Za-z\s-]+$/;

    setFormData({ ...formData, editSuccess: false });
    if (check.test(formData.userName)) {
      editUsername();
      setFormData({ ...formData, userName: "" });
    } else {
      setFormData({ ...formData, editError: true });
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(toggleEdit());
    setFormData({ ...formData, userName: "" });
  };

  return (
    <div className="edit-container">
      {formData.editSuccess && <p className="success-message">Modification réussie du nom d'utilisateur!</p>}
      {formData.editError && <p className="error-message">Le nom d'utilisateur ne peut pas contenir de caractères spéciaux. Veuillez réessayer.</p>}
      <form type="submit" onSubmit={handleSubmit} className="form">
        <div className="input-wrapper">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={formData.userName}
            onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" value={firstName} disabled />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" value={lastName} disabled />
        </div>
        <div className="button-wrapper">
          <Button className="edit-button" type="submit">
            Save
          </Button>
          <Button className="edit-button" onClick={handleClick}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
