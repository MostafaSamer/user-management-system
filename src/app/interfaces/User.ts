enum UserRole {
    admin = 0,
    user = 1
}

export interface User {
    id?: number;
    username: string;
    password?: string;
    role: UserRole;
}