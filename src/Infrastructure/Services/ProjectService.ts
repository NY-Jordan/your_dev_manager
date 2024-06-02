import { mdiTruckAlertOutline } from "@mdi/js";
import ApiClient from "../../Application/Helpers/ApiClient";
import secureLocalStorage from "react-secure-storage";
import { SetStateAction, Dispatch } from "react";
import { store } from "../../Application/Store/store";
import { AcceptProjectInvitationFailed, AcceptProjectInvitationSucess, CreateProjectFailed, CreateProjectSucess, DeleteProjectFailed, DeleteProjectSucess, RefuseProjectInvitationFailed, RefuseProjectInvitationSucess, SearchUserProjectFailed, SearchUserProjectSucess, SendInvitationFailed, SendInvitationSucess, getProjectFailed, getProjectSucess } from "../../Application/Actions/ProjectActions";
import { ProjectInvitationInterface } from "../../Domain/Entities/project.entities";


export async function CreateNewProject (name :string)  {
    ApiClient().post('/project/create',  
   {
       'name' : name,
   },
   {
        headers : {
            Authorization : 'Bearer '+ secureLocalStorage.getItem('token')
        }
   }
   )
   .then(async (response)  => {
       const res = response.data;
       if (response.status === 200) {
           store.dispatch(CreateProjectSucess(200))
       }   
   }).catch(async (e)  => { 
       store.dispatch(CreateProjectFailed(400))
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
    console.log(e);
    
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
            const users = res.users;
           store.dispatch(SearchUserProjectSucess(users));
        }   
    }).catch((e) => { 
        store.dispatch(SearchUserProjectFailed('ERROR ERROR'));
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
            store.dispatch(SendInvitationSucess(userId,projectId,200))
        }   
    }).catch((e) => { 
        if(e.response.status === 412){
            store.dispatch(SendInvitationFailed(userId,projectId,412))
        }else {
            store.dispatch(SendInvitationFailed(userId,projectId,400))
        }
    }) 
}


export async function acceptProjectInvitation(uuid : string|number) {
    ApiClient().post('/project/invite/user/accept/'+uuid,  
    {},
    {
        headers : {
            Authorization : 'Bearer '+secureLocalStorage.getItem('token')
        }
    }).then((response) => {
        const res = response.data;
        if (response.status === 200) {
            store.dispatch(AcceptProjectInvitationSucess(uuid))
        }   
    }).catch((e) => { 
        store.dispatch(AcceptProjectInvitationFailed());
        
    }) 
}

export async function refuseProjectInvitation(uuid : string|number) {
    ApiClient().post('/project/invite/user/reject/'+uuid,  
    {},
    {
        headers : {
            Authorization : 'Bearer '+secureLocalStorage.getItem('token')
        }
    }).then((response) => {
        const res = response.data;
        if (response.status === 200) {
            store.dispatch(RefuseProjectInvitationSucess(uuid))
        }   
    }).catch((e) => { 
        store.dispatch(RefuseProjectInvitationFailed());
    }) 
}


export async function DeleteProjectService(projectId : number) {
    ApiClient().post('/project/delete/'+projectId,  
    {},
    {
        headers : {
            Authorization : 'Bearer '+secureLocalStorage.getItem('token')
        }
    }).then((response) => {
        const res = response.data;
        if (response.status === 201) {
            store.dispatch(DeleteProjectSucess());
        }   
    }).catch((e) => { 
        store.dispatch(DeleteProjectFailed());
    }) 
}


export async function getProjectInvitation(uuid : string|number) : Promise<ProjectInvitationInterface|null>   {
    try {
        const response  = await ApiClient().get('/project/invite/'+uuid,
        {
            headers : {
                Authorization : 'Bearer '+secureLocalStorage.getItem('token')
            }
        })
        const res =  response.data.data;
       return res;
    } catch (error) {
        return null;
    }
    
}