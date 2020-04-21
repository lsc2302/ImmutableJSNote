const {OrderedSet} = require('immutable');

const oset = OrderedSet([2,4,6,8,1,3,5,7,9]);
for(const val of oset.values()){
    console.log(val)
}

const result = oset.takeWhile((item)=>item %2 ===0);
for(const val of result.values()){
    console.log("takeWhile",val)
}

//sort 
//A-B ASC
const sort1 = oset.sort((valA, valB)=>valA-valB);
for(const val of sort1.values()){
    console.log("asc-sort",val)
}
//B-A DESC
const sort2 = oset.sort((valA, valB)=>valB-valA);
for(const val of sort2.values()){
    console.log("desc-sort",val)
}

//