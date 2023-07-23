import categoryData from '@/data/categoryData.json'

export const getCategoryName = (catId) => {
    return categoryData.find(cat => cat.catId === catId)?.catName
}

export function objectToQueryParams(obj) {
    const queryParams = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            if (value !== null && value !== undefined) {
                const encodedKey = encodeURIComponent(key);
                const encodedValue = encodeURIComponent(value);
                const param = `${encodedKey}=${encodedValue}`;
                queryParams.push(param);
            }
        }
    }

    return queryParams.join('&');
}


export const sortObjectByKeys = (object, { desc = false } = {}) => Object.fromEntries(
    Object.entries(object).sort(([k1], [k2]) => k1 < k2 ^ desc ? -1 : 1),
)

export const checkIfNumber = (val) => {
    return /^\d+$/.test(val);
}

export const checkPhoneNumber = (val) => {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(val)
}