let stringers  = ['tri-stringer', 'inkline tri-stringer', 'wellstring v', 'order tri-stringer', 'bulbz tri-stringer'];

console.log(stringers);

stringers.push('reef-lux 450');

console.log(stringers);

stringers.splice(2, 1);

console.log(stringers);

const stringersList = stringers.join(', ');

console.log(stringersList);