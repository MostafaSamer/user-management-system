enum UserRole {
    admin = 0,
    user = 1
}

export interface User {
    id?: number;
    email: string;
    password: string;
    role: UserRole;
}