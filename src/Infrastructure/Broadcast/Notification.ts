import toast from "react-hot-toast";
import { NotificationEnum } from "../../Domain/Enums/NotificationEnums";
import { getAllNotification } from "../Services/NotificationService";

export const handleNotification = (notification : any) => {
    toast('Vous avez une nouvelle notification', {
        duration: 4000,
        position: "bottom-left",
        style: {
            backgroundColor : '#0284c7',
            color : 'black'
        },
        icon: '🔔',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    getAllNotification()
}
