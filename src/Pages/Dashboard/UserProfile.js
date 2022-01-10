import { useSelector } from "react-redux";
import "./UserProfile.css";

const UserProfile = () => {
  const user = useSelector((state) => state.user.userAuth);
  return (
    <div>
      <div className="row w-100">
        <div className="profile d-flex justify-content-center align-items-center flex-column">
          <div className="user-img text-center pb-5">
            <img
              src={
                user.photoURL
                  ? `${user.photoURL}`
                  : `https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png`
              }
              alt="profile-pic"
              className="img-fluid"
            />
          </div>
          <div className="user-info mt-5">
            <h4>
              Name: <span className="info">{user.displayName}</span>
            </h4>
            <hr />
            <h4>
              Email: <span className="info email ps-2">{user.email}</span>
            </h4>
            <hr />
            {/* <h4>
              Date of birth: <span className="ms-3">N/A</span>
            </h4>
            <hr />
            <h4>
              Gender: <span className="info-last">N/A</span>
            </h4>
            <hr /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
