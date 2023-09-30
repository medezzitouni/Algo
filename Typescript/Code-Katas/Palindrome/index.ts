export function isPalindrome(str: string) {
    let len = str.length,
        mid = (str.length / 2) | 0
    
    if(str.length == 0) return false;
    if(str.length == 1) return true;

    for (let i = 0; i <= mid; i++) if (str[i] != str[len - 1 - i]) return false
    return true
}

export function highestValuePalindrome(
    s: string,
    n: number,
    k: number
): string {

    let int = (n: number) => n | 0;
    let i = 0, len = n - 1, mid = int(n/2);
    let changed: number[] = [];
    let str = s.split('');

    while(i < n){
        if(str[i] != str[len - i]){
            if(k == 0) return '-1';
            str[len -  i] = str[i] = String(Math.max(Number(str[i]), Number(str[len - i])));
            k--;
            changed.push(i);
        }
        i++;
    }

    i = 0;
    while(i < n && k > 0){
        if(str[i] != '9'){
            if(changed.indexOf(i) != -1){
                str[len -  i] = str[i] = '9';
                k--;
            }else if(k >= 2){
                str[len -  i] = str[i] = '9';
                k-=2;
            }
        }
        i++;
    }

    if(n % 2 == 1 && k > 0)
        str[mid] = '9';

    return str.join('');

}


// EXO-2
export function longestPalindromeSubstring(s: string): string {

    let i = 0;
    let largestPalindrome: string = '';
    
    while(i < s.length){
        let j = 0;
        while(j < s.length){
            let substr = s.slice(i, j + 1);

            if(isPalindrome(substr))
                largestPalindrome = largestPalindrome.length < substr.length ? substr : largestPalindrome;
            j++;
        }
        i++;
    }
    
    return largestPalindrome;
    // [Math.max(...Object.keys(largestPalindrome).map(s => Number(s)))]
}