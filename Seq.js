//Seq immutable, lazy
const {Seq} = require('immutable');

const oddSquares = Seq([,2,3,4,5,6,7,8])
                    .filter(x=>x%2 !==0)
                    .map(
                        x=>{
                            console.log('run');
                            return x*x;
                    });

//collection(List, Map, Set) =>Seq
//Seq lazy, won;t work until observed
console.log(oddSquares);

const {List, Map, Set} = require('immutable');
const list = List([1,3,2,4,]);
const seq1 = Seq(list);
console.log(seq1);

const map = Map({
    x:1,
    y:2,
    z:3
});
const seq2 = Seq(map);
console.log(seq2);

const set = Set([1,2,3]);
const seq3 = Seq(set);
console.log(seq3);


//Seq.keyed for map
const map1 = Map({
    x:1,
    y:2,
    z:3
});
const seq4 = Seq.Keyed(map1);
console.log(seq4);
//Seq.indexed for List
const list1 = List([1,3,2,4,]);
const seq5 = Seq(list1);
console.log(seq5);

//Seq.Set for set
const set1 = Set([1,2,3]);
const seq6 = Seq.Set(set1);
console.log(seq6);