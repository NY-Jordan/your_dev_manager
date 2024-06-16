import secureLocalStorage from "react-secure-storage";
import ApiClient from "../../Application/Helpers/ApiClient";
import { GroupTaskInterface } from "../../Domain/Entities/groups_task.entities";
import { createGroupTaskFailed, createGroupTaskSucess } from "../../Application/Actions/GroupTaskActions";
import { store } from "../../Application/Store/store";


export async function getAllGroupTasks(projectId : number)  : Promise<Array<GroupTaskInterface>|null> {
    try {
        const response  = await ApiClient().get('/project/taskgroup/'+projectId,
        {
            headers : {
                Authorization : 'Bearer '+secureLocalStorage.getItem('token')
            }
        })
        const res = response.data;
        return res.task_groups;
    } catch (error) {
        return null;
    }
}


export async function createGroupTasks(projectId : number, name : string)  {
    try {
        const response  = await ApiClient().post('/project/taskgroup/create',
        {
            name : name,
            project_id : projectId,
        },
        {
            headers : {
                Authorization : 'Bearer '+secureLocalStorage.getItem('token')
            }
        })
        if (response.status === 201) {
            store.dispatch(createGroupTaskSucess(projectId));
        }
    } catch (error) {
        store.dispatch(createGroupTaskFailed(projectId))
    }
}