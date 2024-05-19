import Echo from 'laravel-echo';
import secureLocalStorage from 'react-secure-storage';
import Pusher from "pusher-js"

window.Pusher = Pusher;


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


const echo = new Echo(options); 


export function notification() {
  
  var pusher = new Pusher('eb065acbe5ce3ae21e43', {
    cluster: 'sa1'
  });

  var channel = pusher.subscribe('App.Models.User.' + secureLocalStorage.getItem('user').id);
  console.log(channel);
  channel.bind ('notification', function(data) {
    console.log(data);
  });
  
}


