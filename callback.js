const start = (name)=> name.toUpperCase();

const result = (name,callback)=> callback(name);

const end = result('nabila',start);

console.log(end);

