import { useDispatch, useSelector } from "react-redux";
import UserShow from "./components/user_show";
import { setFirstname, setLastname, setAge } from "./redux/userSlice";

function App() {
   // const authState = useSelector((state) => state.auth);
   const userState = useSelector((state) => state.user);
   const dispatch = useDispatch();
   console.log(">>auth state", userState);

   return (
      <div className="container mt-5">
         <div className="row">
            <div className="col-6">
               <div className="col-12">
                  <label for="firstName" class="form-label">
                     Adı
                  </label>
                  <input
                     type="text"
                     class="form-control"
                     id="firstName"
                     onChange={(event) =>
                        dispatch(setFirstname(event.target.value))
                     }
                     placeholder="lütfen adınızı yazınız"
                  ></input>
               </div>
               <div className="col-12 mt-4">
                  <label for="firstName" class="form-label">
                     Soyisim
                  </label>
                  <input
                     type="text"
                     class="form-control"
                     onChange={(event) =>
                        dispatch(setLastname(event.target.value))
                     }
                     id="firstName"
                     placeholder="lütfen soyadınızı yazınız"
                  ></input>
               </div>
               <div className="col-12 mt-4">
                  <label for="firstName" class="form-label">
                     Yaş
                  </label>
                  <input
                     type="number"
                     class="form-control"
                     id="firstName"
                     onChange={(event) => dispatch(setAge(event.target.value))}
                     placeholder="lütfen yaşınızı yazınız"
                  ></input>
               </div>
            </div>
            <div className="col-6">
               <UserShow />
            </div>
            <div className="col-6">
               <br />
               isim:{userState.firstname}
               <br />
               soyisim:{userState.setLastname}
               <br />
               yaş:{userState.age}
            </div>
         </div>
      </div>
   );
}

export default App;
