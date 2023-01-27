let classNames = ['header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'];

let classNamesCount = {};
let uinqClassNames = [];

for (let i = 0; i < classNames.length; i++) {
  let current = classNames[i];
  if (classNamesCount[current]) {
    classNamesCount[current] += 1;
  } else {
    classNamesCount[current] = 1;
    uinqClassNames.push(current);
  }
}

let result = uinqClassNames.sort((a, b) => {
  return classNamesCount[b] - classNamesCount[a];
});

console.log(result);

//console.table(classNamesCount);
//let result = [ 'link', 'menu-item', 'menu', 'header', 'footer' ];
