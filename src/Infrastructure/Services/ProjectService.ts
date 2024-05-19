import { mdiTruckAlertOutline } from "@mdi/js";
import ApiClient from "../../Application/Helpers/ApiClient";
import secureLocalStorage from "react-secure-storage";
import { SetStateAction, Dispatch } from "react";
import { store } from "../../Application/Store/store";
import { getProjectFailed, getProjectSucess } from "../../Application/Actions/ProjectActions";


export async function CreateNewProject (name :string)  {
    ApiClient().post('/project/create',  
   {
       'name' : name,
   },
   {
        headers : {
            Authorization : 'Bearer '+secureLocalStorage.getItem('token')
        }
   }
   )
   .then(async (response)  => {
       const res = response.data;
       if (response.status === 200) {
           /* setStatus(200); */
       }   
   }).catch(async (e)  => { 
       console.log(e.response.status);
       /* setStatus(400);  */
   })   
   
};

export async function getAllProjects ()  {
    ApiClient().get('/project/user',  
   {
        headers : {
            Authorization : 'Bearer '+secureLocalStorage.getItem('token')
        }
   })
   .then((response) => {
       const res = response.data;
       if (response.status === 200) {
            const data = res.data
           store.dispatch(getProjectSucess(data.projects, data.count));
       }   
   }).catch((e) => { 
        store.dispatch(getProjectFailed('Somethings went wrong'));
   })   
   
};

export async function SearchUsers (search : string|number|null, projectId : number){
    ApiClient().get(('/project/search/'+projectId+'?search='+search),  
    {
         headers : {
             Authorization : 'Bearer '+secureLocalStorage.getItem('token')
         }
    }).then((response) => {
      
        const res = response.data;
        if (response.status === 200) {
           /*  setResult(res.users) */
        }   
    }).catch((e) => { 
    }) 
}


export async function SendInvitationToUser(userId : number,projectId : number) {
    ApiClient().post('/project/invite/'+userId+'/user/'+projectId,  
    {},
    {
        headers : {
            Authorization : 'Bearer '+secureLocalStorage.getItem('token')
        }
    }).then((response) => {
        const res = response.data;
        if (response.status === 201) {
            /* setStatus(201) */
        }   
    }).catch((e) => { 
        if(e.response.status === 412){
           /*  setStatus(412); */
        }else {
           /*  setStatus(400); */
        }
    }) 
}