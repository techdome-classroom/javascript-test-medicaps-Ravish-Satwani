function smallestMissingPositiveInteger(A) {

  let n = A.length;
        
        let curr = new Array(n+1);
        
        // intializing it with 0 (false)
        for(let i=0;i<n+1;i++)
        {
            curr[i]=false;
        }
        
        // travesing the input and marking it with 1 (true)
        for (let i = 0; i < n; i++)
        {
            if (A[i] > 0 && A[i] <= n)
            {
                curr[A[i]] = true;
            }
        }

        // traversing again and looking for int wih value false
        for (let i = 1; i <= n; i++)
        {
            if (!curr[i])
            {
                return i;
            }
        }
        return n + 1;

}

module.exports = smallestMissingPositiveInteger;
