import { NotificationInterface } from "../../Domain/Entities/notifications.entities";
import { ProjectInterface } from "../../Domain/Entities/project.entities";

export const  NotificationActions = {
    GET_NOTIFICATIONS_SUCESS : "GET_NOTIFICATIONS_SUCESS" ,
    GET_NOTIFICATIONS_FAILED : "GET_NOTIFICATIONS_FAILED" ,
}


export const getNotificationsSucess = (notifications : NotificationInterface) => ({
    type : NotificationActions.GET_NOTIFICATIONS_SUCESS,
    payload : {notifications : notifications}
});

export const getNotificationsFailed = () => ({
    type : NotificationActions.GET_NOTIFICATIONS_SUCESS,
    payload : {error : true}
});