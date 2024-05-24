import toast from "react-hot-toast";
import { NotificationEnum } from "../../Domain/Enums/NotificationEnums";

export const handleNotification = (notification : any) => {
     if (notification.type === NotificationEnum.invitation) {
        toast.success('Vous avez une nouvelle notification');
    } 
}
