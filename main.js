const dat = JSON.parse(rawDat)

let a = dat.filter(line => line.Húzásdátum >  "2021.01.01")
	.map(line => ({week: line.Hét, nums: [line.a,line.b,line.c,line.d,line.e]}))

counts = getFrequency(a)

// let low = counts.filter(i=>i.count < 3)
console.log(counts, low)

function getFrequency(dataset){
	let numbers = new Set(dataset.map(line => line.nums).flat())

	return Array.from(numbers).map(num=>{
		let count = dataset.reduce((c,i)=>{
			if(i.nums.includes(num)){
				c++;
			}
			return c;
		},0)

		return {num, count}
	}).sort((a,b)=> b.count - a.count)

}
