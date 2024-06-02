import secureLocalStorage from "react-secure-storage";
import ApiClient from "../../Application/Helpers/ApiClient";
import { UserInterface } from "../../Domain/Entities/user.entities";





export async function getUserDetails(id : string|number) : Promise<UserInterface|null>   {
    try {
        const response  = await ApiClient().get('/user/'+id,
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