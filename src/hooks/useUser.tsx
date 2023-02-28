import { useContext } from 'react';
import { UserContext } from '../contexts/AuthContext';
import { User } from '../types/user_types';

export default function useUser(): [User|null, Function] {
    return useContext(UserContext) as unknown as [User|null, Function];
};