function twoSum(nums: number[], target: number): number[] {
    const numsObj: { [key: string]: number} = {};
    
    for (let i = 0; i < nums.length; i++) {
        const keyNum = target - nums[i];
        if (numsObj.hasOwnProperty(keyNum)) return [ numsObj[keyNum], i ];
        numsObj[nums[i]] = i;
    };
};