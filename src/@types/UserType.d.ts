export interface User {
    id: number;
    user_name: string;
    user_id: string;
}
export interface UserData {
    user_name: string;
    user_id: string;
}

export interface FormProps {
    onSubmit: (data: UserData) => void;
}

export interface DeleteProps{
    onDelete: (id : number) => void;
}