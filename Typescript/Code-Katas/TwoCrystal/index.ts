

function twoCrystals(breaks: boolean[]) {
    const jumpStep = Math.floor(Math.sqrt(breaks.length))
    let i = jumpStep

    for (; i < breaks.length; i += jumpStep) {
        if (breaks[i])
            break;
    }

    const breaked = i;
    i -= jumpStep

    for (; i < breaked; ++i)
        if (breaks[i])
            return i;

    return -1;
}

console.log(twoCrystals([false, false, false, false, false, false, false, false, true, true, true, true, true]));