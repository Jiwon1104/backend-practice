let classmates = ["Amy", "Jane", "Eric", "Kevin"]
// undefined
classmates.includes("Amy")
// true
classmates.includes("dddd")
// false
classmates.length
// 4
classmates.push("Jiwon")
// 5
classmates.includes("Jiwon")
// true
classmates.includes("jiwon")
// false
classmates
// (5) ['Amy', 'Jane', 'Eric', 'Kevin', 'Jiwon']
classmates.length
// 5
classmates.pop()
// 'Jiwon'
classmates.length
// 4
classmates
// (4) ['Amy', 'Jane', 'Eric', 'Kevin']