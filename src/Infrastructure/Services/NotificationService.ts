import secureLocalStorage from "react-secure-storage";
import ApiClient from "../../Application/Helpers/ApiClient";
import { getNotificationsFailed, getNotificationsSucess } from "../../Application/Actions/NotificationActions";
import { store } from "../../Application/Store/store";

export async function getAllNotification ()  {
    ApiClient().get('/notifications',  
   {
        headers : {
            Authorization : 'Bearer '+secureLocalStorage.getItem('token')
        }
   })
   .then((response) => {
       const res = response.data;
       if (response.status === 200) {
            const data = res.data
           store.dispatch(getNotificationsSucess(data.data));
       }   
   }).catch((e) => { 
        store.dispatch(getNotificationsFailed());
   })   
   
};