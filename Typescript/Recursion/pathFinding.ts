type Point = {
    x: number,
    y: number
}


const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
]


function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]) {

    if (curr.x < 0 || curr.x >= maze.length || curr.y < 0 || curr.y >= maze[0].length)
        return false

    if (maze[curr.x][curr.y] === wall)
        return false;

    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    if (seen[curr.x] && seen[curr.x][curr.y])
        return false;

    seen[curr.x][curr.y] = true;

    path.push(curr);

    for (let i = 0; i < maze.length; i++) {
        const [x, y] = dir[i];
        if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
            return true
        }
    }

    path.pop();

    return false;

}

const maze = [
    "x x  ",
    "x x x",
    "x   x",
    "x  xx",
]

let seen: boolean[][] = [];

for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
}


let path: Point[] = [];

walk(maze, 'x', { x: 0, y: 4 }, { x: 3, y: 1 }, seen, path)
