import { Injectable } from "@nestjs/common";

Injectable ()

export type User = any;

export class UsersService {
    private readonly users = [
        {
            userId:1,
            username: 'teste',
            password: '123',
        },
        {
            userId:2,
            username: 'teste',
            password: '456',
        },
    ];

    async findOne (username: string): Promise <User | undefined> {
        return this.users.find(users => users.username === username);
    }

};