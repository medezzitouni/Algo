const a = [1, 7, 3, 6, 2, 4, 9, 8];

const b = [3, 3, 2, 4, 8, 2, 8, 5];

const alreadyPassed: number[] = [];

function lastNode(startNodeIndex: number) {
  for (let i = startNodeIndex; i < a.length;) {
    const index = a.indexOf(b[i]);
    if (index !== -1 && alreadyPassed.indexOf(i) === -1) {
      alreadyPassed.push(i);
      i = index;
    } else {
      return b[index === -1 ? i : index];
    }
  }
}

console.log(lastNode(0));
