function longestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let arr = {};

    for (let i = 0; i < s.length; i++){
        const currChar = s[i];
        
        if (arr[currChar] !== undefined && arr[currChar] >= start) {
            start = arr[currChar] + 1; 
        }
        arr[currChar] = i; 

        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
}

module.exports = { longestSubstring };


