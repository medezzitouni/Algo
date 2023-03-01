var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function findMedianSortedArrays(nums1, nums2) {
    var m = nums1.length, n = nums2.length;
    var mergedArray = [];
    var i = 0, j = 0;
    if (m == 0 && n == 0)
        return 0;
    else if (m == 0 || n == 0) {
        mergedArray = m ? nums1 : nums2;
        console.log(mergedArray);
    }
    else {
        while (i < m && j < n) {
            if (nums1[i] < nums2[j]) {
                mergedArray.push(nums1[i++]);
            }
            else if (nums1[i] == nums2[j]) {
                mergedArray.push(nums1[i++]);
                mergedArray.push(nums2[j++]);
            }
            else {
                mergedArray.push(nums2[j++]);
            }
        }
        if (i < m)
            mergedArray = __spreadArray(__spreadArray([], mergedArray, true), nums1.slice(i, m), true);
        else if (j < n)
            mergedArray = __spreadArray(__spreadArray([], mergedArray, true), nums2.slice(j, n), true);
    }
    console.log(m + n, mergedArray.length, mergedArray);
    var s = mergedArray.length;
    return s % 2 ? mergedArray[s / 2 | 0]
        : (mergedArray[s / 2] + mergedArray[(s / 2) - 1]) / 2;
}
;
console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 4, 4]));
