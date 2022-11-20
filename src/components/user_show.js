import { useSelector } from "react-redux";

function UserShow() {
   const userState = useSelector((state) => state.user);
   return (
      <div>
         <strong>İsim</strong>
         {userState.firstname}
         <br />
         <br />
         <strong>Soyisim</strong>
         {userState.lastname}
         <br />
         <br />
         <strong>Yas</strong>
         {userState.age}
      </div>
   );
}

export default UserShow;
