function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const m = nums1.length, n = nums2.length;
    let mergedArray: number[] = [];
    let i = 0, j = 0;
    if(m == 0 && n == 0)
        return 0;
    else if(m == 0 || n == 0){
        mergedArray = m ? nums1 : nums2
        console.log(mergedArray);  
    }
    else{
        while(i < m && j < n){
            if(nums1[i] < nums2[j]){
                mergedArray.push(nums1[i++]);
                
            }else if(nums1[i] == nums2[j]){ 
                mergedArray.push(nums1[i++]);
                mergedArray.push(nums2[j++]);
            }else{
                mergedArray.push(nums2[j++]);
            }
        }

        if(i < m) mergedArray = [...mergedArray, ...nums1.slice(i, m)]
        else if(j < n) mergedArray = [...mergedArray, ...nums2.slice(j, n)]
    }

    console.log(m+n, mergedArray.length, mergedArray);
    const s = mergedArray.length;

    return s % 2 ? mergedArray[s/2 | 0] 
    : (mergedArray[s/2] + mergedArray[(s/2) - 1]) / 2;
};

console.log(findMedianSortedArrays([2, 2, 4, 4],[2, 2, 4, 4]));