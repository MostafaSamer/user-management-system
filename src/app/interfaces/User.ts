enum UserRole {
    admin = 0,
    user = 1
}

export interface User {
    id?: number;
    username: string;
    name: string;
    email: string;
    password?: string;
    role: UserRole;
}