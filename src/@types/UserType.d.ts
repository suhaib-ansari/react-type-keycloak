interface ApiResponse<T> {
    data: T[];
}

export interface User {
    id: number;
    user_name: string;
    user_id: string;
}

export type UserApiResponse = ApiResponse<User>;

export interface FormData {
    username: string;
    userid: string;
}

export type FromDataList = ApiResponse<FormData>;

export type UserContextType = {
    userdata: User[];
};

export interface FormProps {
    onSubmit: (data: FormData) => void;
}