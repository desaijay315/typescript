export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback();
}

export type MututationFunction = (v: number) => number;


export function arrayMutate(numbers: number[], mutuate: MututationFunction): number[] {
    return numbers.map(mutuate)
}

console.log(arrayMutate([1,2,3], (v) => v * 10))

