import type {User} from '@prisma/client'

export enum SignUPWithUsernameAndPasswordError {
    CONFLICTING_USERNAME = 'CONFLICTING_USERNAME',
    UNKNOWN = 'UNKNOWN'
}

export type SignUpWithUsernameAndPasswordResult = {
    user: User
    token: string
}