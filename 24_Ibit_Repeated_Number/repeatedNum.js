function repeatedNumber(A){
        const n = A.length - 1;
		const count = new Array(n).fill(0);
		for (let i = 0; i <= n; i++) {
			const countIndex = A[i];
			if (count[countIndex] === 1) {
				return A[i];
			}
			count[countIndex] = 1;
		}
		return -1;
}

console.log(repeatedNumber([3, 8, 1, 0, 2, 5, 4, 5]))