
export function convert(s: string, numRows: number): string {
    const zigzagLen: number = numRows - 1;
    let edge: boolean = true;
    let newStr: string[][] = [];
    let j = 0;

    for(let i = 0; i < s.length; i++){
        if(j == 0 || j == zigzagLen)
            edge = !edge;

        newStr[j] ? newStr[j].push(s[i]) : newStr[j] = [s[i]];
        
        if(!edge)
            j++;
        else
            j--;
    }
    console.log(newStr);
    
    return newStr.reduce((x: string, y: string[]) => x + y.join('') , '');
};