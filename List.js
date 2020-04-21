const {List}  = require('immutable');

// const list = new List([1,2,3,4]) No!!
const list = List([1,2,3,4]);
console.log(list);

//List has two static methods: List.isList() List.of()
console.log(List.isList(list));
console.log(List.isList([1,2,3,4])); 


//List.of() create new list
const l = List.of(1,2,3,4);
console.log(l);

//size
const size = l.size;
console.log(size);

//set: set value of certain index
const l2 = List.of(1,2,3,4);
console.log(l2);

const l3 = l2.set(0,110);
console.log(l3);

//exceeds size
const l4 = l2.set(10,110);
console.log(l4);

//negative index
const l5 = l2.set(-1,999);
console.log(l5);

//delete
const d1 = List.of(1,2,3,4);
const d2 = d1.delete(0);
console.log(d2)

const d3 = d1.delete(-2);
console.log(d3)

//insert 
const i1 = List.of(1,2,3,4);
const i2 = i1.insert(1,666);
console.log(i2);

//update
const u1 = List.of(1,2,3,4);
const u2 = u1.update(1, x=>x+100);
console.log(u2);

//clear
const c1 = List.of(1,2,3,4);
const c2 = c1.clear();
console.log(c2);

//push pop shift unshift

//setSize
//<:truncate >:undefined fill
const s1 = List.of(1,2,3,4);
const s2 = s1.setSize(2)
console.log(s2);

//setIn ste value of nesting structure
const arr1 = List([
    List([1,2,3,4]),
    List([1,2,3,4]),
    List([1,2,3,4])
]);
const arr2 =arr1.setIn([2,1],0);
console.log(arr2);

//concat(map)
const list1 = List.of(1,2,3,4);
const list2 = List.of(11,12);
const list3 = List.of(66,77);
const totalList = list1.concat(list2, list3);
console.log(totalList);

//filter


//flatten
const f1 = arr1.flatten(true);
console.log("flatten", f1);

//find
const m1 = List(['a','b','d','d']);
const m2 = m1.find((v,k)=>v.indexOf('b') !== -1);
console.log(m2);

//findLast
const m3 = m1.findLast((v,k)=>v.indexOf('d') !== -1);
console.log(m3);

//keys
const k1 = m1.keys();
for (const key of k1){
    console.log(key);
}

//values
const v1 = m1.values();
for (const value of v1){
    console.log(value);
}

//entries
const e1 = m1.entries();
for(const entry of e1){
    console.log(entry)
}

//groupby
const g1 = List([
    {"sex":"male","name":"a"},
    {"sex":"female","name":"b"},
    {"sex":"male","name":"c"},
    {"sex":"female","name":"d"},
    {"sex":"male","name":"e"},
]);

const gp = g1.groupBy(x => x['sex']);
console.log("gp", gp);
const gp1 = g1.groupBy(x => x.sex);
console.log("gp", gp1);
