var St=new Set();
St.add(1).add(2).add(3);
console.log(St,St.size);
St.add(4);
console.log(St,St.size,St.has(1),St.add(2));
