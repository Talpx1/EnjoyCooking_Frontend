import { useContext } from 'react';
import { UserContext } from '../contexts/AuthContext';

export default function useUser(): [User|null, Function] {
    return useContext(UserContext) as unknown as [User|null, Function];
};