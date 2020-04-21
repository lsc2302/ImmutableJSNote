const {Map, List}  = require('immutable');
const m1 = Map({
    x:1,
    y:2
});
for(const entry of m1.entries()){
    console.log(entry)
}
//set
const m2 = m1.set('z',666);
for(const entry of m2.entries()){
    console.log(entry)
}
const m3 = m1.set(List([1]),{'username':'a'});
for(const entry of m3.entries()){
    console.log(entry)
}

//get
console.log(m2.get('z'));

//delete
const d1 = Map({
    username:'a',
    age:18
});
const d2 = d1.delete('age');
for(const entry of d2.entries()){
    console.log(entry)
}

//deleteall
const da1 = Map({
    x:1,
    y:2,
    z:3,
})
const da2 = da1.deleteAll(['x','z']);
console.log("delete all");
for(const entry of da2.entries()){
    console.log(entry)
}

//clear
const cls = da1.clear();
console.log(cls);

//update
const sa1 = Map({
    name:"a",
    salary:100
});
const sa2 = sa1.update('salary',x=>x*2);
for(const entry of sa2.entries()){
    console.log(entry)
}

//merge(concat)
const mer1 = Map({
    x:1,
    y:2
});
const mer2 = Map({
    y:666,
    z:3
});
const mer3 = mer1.merge(mer2);
for(const entry of mer3.entries()){
    console.log(entry)
}

//mergeWith
const mer4 = mer1.mergeWith((oldval, newval)=>{return newval+"!!!"},mer2);
for(const entry of mer4.entries()){
    console.log(entry)
}

//setIn, deleteIn, updateIn, mergeIn
const deepMap=Map({
    lev1:Map({
        lev2:Map({
            lev3:Map({
                lev4:"good"
            })
        })
    })
});
const setIn2 = deepMap.setIn(['lev1','lev2','lev3','lev4'],'good morning');
console.log(setIn2.getIn(['lev1','lev2','lev3','lev4']));

//toJS (deep copy)
const deep = deepMap.toJS();
console.log(deep);

//toJSON (shallow copy)
const shallow = deepMap.toJSON();
console.log(shallow);

//toArray (shallow copy)
const arrTest = Map({
    x:1,
    y:2,
    z:3
});
const arr = arrTest.toArray();
console.log(arr);

//toObject (shallow copy)
const json = arrTest.toMap();
console.log(json);

//equals
const e1 = Map({
    x:1,
    y:2,
    z:3
});

const e2 = Map({
    x:1,
    y:2,
    z:3
});

console.log(e1 === e2); //false
console.log(e1.equals(e2)); //true


//find
const findTest = Map({
    x:1,
    y:2,
    z:'a'
});
const findResult = findTest.find((v,k)=>typeof v === 'string');
console.log(findResult);

//findLast

//flatten
const flatTest=Map({
    lev1:Map({
        lev2:Map({
            lev3:Map({
                lev4:"good"
            })
        })
    }),
    y:2,
    z:3
});
const flat2 = flatTest.flatten(true);
console.log(flat2);
const flat3 = flatTest.flatten(true);
console.log(flat3);

//has (for key)
const hasTest = Map({
    sex:'male',
    username:'a'
});
console.log(hasTest.has('sex'));

//includes (for val)
const includeTest = Map({
    sex:'male',
    username:'a'
});
console.log(includeTest.includes('male'));

//forEach
includeTest.forEach((val,key)=>console.log('val',val,'key',key))