function addNumbers(a:number, b: number): number{
    return a + b;
}


export default addNumbers;

export const addStrings = (str1: string, str2: string = ""): string => `${str1} - ${str2}`;

export const printFormat = () => {
    console.log()
}

export const fetchData = (url: string) => Promise.resolve(`Data from ${url}`);

export const getName = (user: {first: string, last: string}): string => {
    return `${user?.first ?? 'first'} ${user?.last ?? "last"}`;   
}