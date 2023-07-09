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

export interface DeleteProps {
    onDelete: (id: number) => void;
}

export type RendorOnRoleProps = {
    roles: string[];
    children: ReactNode;
};

export interface IProps {
    children: JSX.Element | JSX.Element[];
}