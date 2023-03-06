import i18n from "./i18n";

/**
 * Use this function only if you can't access the 'useCan' hook.
 * Checks whether or not the current logged user has a permission (can or can not do an action)
 * 
 * @param permission permission to check.
 * @param shouldThrow boolean. If this is true and the permission check fails, an error will be thrown.
 */
export function can(permission: string, shouldThrow: boolean = false): boolean{
    const storedUser = localStorage.getItem('user');

    if(!storedUser) return false;

    const user = JSON.parse(storedUser);

    const allowed = user.permissions_list.includes(permission);

    if(shouldThrow && !allowed) throw new Error(i18n.t('user_cant'));

    return allowed;
}