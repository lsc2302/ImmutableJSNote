const {Set} = require('immutable');
const set = Set([1,2,3,4,5,2,2,2,1]);
for(const value of set.values()){
    console.log(value);
}

//add
const add1 = set.add(6);
for(const value of add1.values()){
    console.log("add", value);
}

//delete
const del1 = set.delete(2);
for(const value of del1.values()){
    console.log("del", value);
}

//clear
const cls = set.clear();
for(const value of cls.values()){
    console.log("clear", value);
}

//union
const s1 = Set([1,2,3]);
const s2 = Set(['x','y','z']);
const union = s1.union(s2);
for(const value of union.values()){
    console.log("union", value);
}

//intersect
const in1 = Set([1,2,3,4,5,6]);
const in2 = Set([2,4,6,8,10]);
const resultIntersect = in1.intersect(in2);
for(const value of resultIntersect.values()){
    console.log("intersect", value);
}

//subtract
const sub1 = Set([1,2,3,4,5,6,7,8,9]);
const sub2 = sub1.subtract([1,9]);
for(const value of sub2.values()){
    console.log("sub2", value);
}

//forEach
const each1 = Set(['x','y','z']);
each1.forEach((val,key)=>console.log(key,val));

//get POINTLESS!!
const setArr = Set(['x','y','z']);
console.log(setArr.get('y'));

// has
console.log("has", setArr.has('y'));

//includes
console.log("includes", setArr.includes('y'))

//rest
const r1 = Set([1,2,3,4,5,6]);
const r2 = r1.rest();
for(const value of r2.values()){
    console.log("rest", value);
}

//butLast
const r3 = r1.butLast();
for(const value of r3.values()){
    console.log("butLast", value);
}

//skip (skip first N)
const sk1 = Set([1,2,3,4,5]);
const sk2 = sk1.skip(3);
for(const value of sk2.values()){
    console.log("skip", value);
}

//skipLast (skip last N)
const skL1 = Set([1,2,3,4,5]);
const skL2 = skL1.skipLast(3);
for(const value of skL2.values()){
    console.log("skipLast", value);
}

//skipWhile (get elems after while=true)
const skw1 = Set(["hello","world","good","bad"]);
const skw2 = skw1.skipWhile(item=>item.indexOf('o') !== -1);
for(const value of skw2.values()){
    console.log("skipWhile", value);
}


//skipUntil (get elems after while=false)
const sku1 = Set(['hello','world','good','bad','just','little']);
const sku2 = sku1.skipUntil(item =>item.indexOf('d') !== -1);
for(const value of sku2.values()){
    console.log("skipUntil", value);
}

//take(n) (take first n elems)
const take1 = Set([1,2,3,4,5]);
const take2 = take1.take(2);
for(const value of take2.values()){
    console.log("take", value);
}

//takeWhile (take elems until while=true)
//couldn't work!! not ordered
const tw1 = Set([2,4,6,8,1,3,5,7,9]);
const tw2 = tw1.takeWhile(item=>item%2 === 0);
for(const value of tw2.values()){
    console.log("takeWhile", value);
}

//takeUntil