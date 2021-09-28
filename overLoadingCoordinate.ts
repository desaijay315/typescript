interface Coordinates{
    x: number;
    y: number;
}


function parsedCoordinates(obj: Coordinates): Coordinates;
function parsedCoordinates(str: string): Coordinates;
function parsedCoordinates(x: number, y: number): Coordinates;
function parsedCoordinates(arg1: unknown, arg2?: unknown) : Coordinates{
    let coord: Coordinates = {
        x: 0,
        y: 0
    }

    if(typeof arg1 === "object"){
        coord = {
            ...(arg1 as Coordinates)
        }
    }else if(typeof arg1 === "string"){
        (arg1 as string).split(",").map(v => {
            const [key,value] =  v.split(":")
            coord[key as "x" | "y"] =  parseInt(value,10)
            return coord;
        })
    }else{
        coord = {
            x: arg1 as number,
            y: arg2 as number
        }
    }


    return coord
}


console.log(parsedCoordinates(10,20))
console.log(parsedCoordinates({x: 30, y: 34}))
console.log(parsedCoordinates("x:50,y:60"))