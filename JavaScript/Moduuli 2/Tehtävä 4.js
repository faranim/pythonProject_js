let nums = [];
while (true) {
    num = parseInt(prompt("Syötä numero: "));
    if (num === 0) break;
    nums.push(num);
}
nums.sort((a, b) => b - a);
console.log(nums);