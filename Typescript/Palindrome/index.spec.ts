import { expect } from "chai";
import { isPalindrome, highestValuePalindrome, longestPalindromeSubstring } from ".";


describe('Palindrome', () => {

    describe('isPalindrome', () => {
        it('should be a palindrome', () => {
            expect(isPalindrome("1221")).to.be.true;
            expect(isPalindrome("9339")).to.be.true;
            expect(isPalindrome("12921")).to.be.true;
            expect(isPalindrome('bab')).to.be.true;
            expect(isPalindrome('a')).to.be.true;
        })
    })

    describe('highestValuePalindrome', () => {
        it('should be the largest palindrome after having done the k changes', () => {
            expect(highestValuePalindrome('1231', 4, 3)).to.eq('9339');
            expect(highestValuePalindrome('12321', 5, 1)).to.eq('12921');
            expect(highestValuePalindrome('092282', 6, 3)).to.eq('992299');
            expect(highestValuePalindrome('0011', 4, 1)).to.eq('-1');
        })
    })

    describe('longestPalindromeSubstring', () => {
        it('should be the largest palindrome', () => {
            expect(longestPalindromeSubstring('cbbd')).to.eq('bb');
            expect(longestPalindromeSubstring('babad')).to.be.oneOf(['bab', 'aba']);
            expect(longestPalindromeSubstring('a')).to.eq('a');
        })
    })
})