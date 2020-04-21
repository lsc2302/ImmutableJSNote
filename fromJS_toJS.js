const immutable = require('immutable');

//fromJS
const map = immutable.fromJS({x:1,y:2,z:3, xyz:{good:123}});
for(const entry of map.entries()){
    console.log(entry)
}

const list = immutable.fromJS([1,2,3,[44,55,66]]);
console.log(list);

const list1 = immutable.fromJS([1,2,3,[{x:1,y:2}]]);
console.log(list1);

//toJS
const {List, Set, Map} = require('immutable');

const ls = List([1,2,3,4]);
const arr1 = ls.toJS();
console.log(arr1);

const mp = Map({x:1,y:2});
const obj = mp.toJS();
console.log(obj);

const st = Set([11,22,22,22,33]);
const arr2 = st.toJS();
console.log(arr2);