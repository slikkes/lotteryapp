const dat = JSON.parse(rawDat)
.filter(line => line.Év >= "1998")
.map(line => ({...line, nums: [line.a,line.b,line.c,line.d,line.e]}))


let dataset = dat.filter(line => line["5 találat (db)"] > "0" )
let counts = getFrequency(dataset)
.map(i => ({...i, allCount: getNumberFrequency(i.num, dat)}))
.sort((a,b)=> b.count - a.count || b.allCount - a.allCount )

console.table(counts)

function getFrequency(dataset){
	let numbers = new Set(dataset.map(line => line.nums).flat())

	return Array.from(numbers).map(num=>{
		let count = getNumberFrequency(num, dataset)
		return {num, count}
	})

}

function getNumberFrequency(num, dataset){
	const n = num +""
	return count = dataset.reduce((c,i)=>{
		if(i.nums.includes(n)){
			c++;
		}
		return c;
	},0)
}

function findExactPulls(nums, dataset){
	if(nums.length !== 5){
		new Error("five numbers needed")
	}

	nums = nums.sort((a,b)=>a-b);
	return dataset.filter(line=> {
		console.log(line.nums, nums, line.nums == nums)
		line.nums == nums
	})
}


