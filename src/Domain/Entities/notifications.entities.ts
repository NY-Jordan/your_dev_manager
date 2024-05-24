export interface  NotificationInterface  {
    created_at: Date
    updated_at? : Date|null
    id: number,
    message: string
    type: string,
    status : number
} 

