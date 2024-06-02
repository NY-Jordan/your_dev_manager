import { UserInterface } from "./user.entities"

export interface  ProjectInterface  {
    created_at: Date
    delevry_at? : Date|null
    id: number,
    name: string
    updated_at: string
    user_id: Number
} 

export interface ProjectInvitationInterface {
    uuid : string,
    status : number,
    project : {
        id : number,
        name : string
    },
    receiver : {
        id : number,
        email : string,
        picture : string,
        username : string
    },
    sender : {
        id : number,
        email : string,
        picture : string,
        username : string
    }
}