export function objToFormData(data: object): FormData{
    const formData  = new FormData();
    for(const name in data) formData.append(name, data[name]);
    return formData;
}

export function formDataToObj(data: FormData): object{
    return Object.fromEntries(data);
}