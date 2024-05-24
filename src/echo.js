import Echo from 'laravel-echo';
import secureLocalStorage from 'react-secure-storage';
import  "pusher-js"
import { getCurrentUser } from './Application/Helpers/Actions';
import { UserInterface } from './Domain/Entities/user.entities';
import { handleNotification } from './Infrastructure/Broadcast/Notification';


const options = {
  broadcaster: 'pusher',
  key: process.env.REACT_APP_PUSHER_APP_KEY,
  cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
  forceTLS: true,
  //authEndpoint is your apiUrl + /broadcasting/auth
  authEndpoint: process.env.REACT_APP_BASE_URL_API+'/broadcasting/auth',
  // As I'm using JWT tokens, I need to manually set up the headers.
  auth: {
    headers: {
      Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
      Accept: 'application/json',
    },
  },
};
const user   =  getCurrentUser();
export const echo  = new Echo(options); 


echo.private('App.Models.User.' + user?.id)
    .notification((notification  ) => {
      handleNotification(notification);
});
