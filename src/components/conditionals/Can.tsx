import { useTranslation } from 'react-i18next';
import useCan from '../../hooks/useCan';
export default function Can({permission, children, shouldThrow = false}: {permission: string, shouldThrow?:boolean, children: any}) {
    const can = useCan();
    const {t} = useTranslation();

    if(shouldThrow && !can(permission)) throw new Error(t('user_cant'))

    return can(permission) ? <>{children}</> : null;
};
