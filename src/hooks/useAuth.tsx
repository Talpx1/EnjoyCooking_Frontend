import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function useAuth(): [Function, Function, Function] {
    return useContext(AuthContext) as unknown as [Function, Function, Function];
};