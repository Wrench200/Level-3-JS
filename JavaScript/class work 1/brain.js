names = ['tebi', 'mike', 'tresor', 'idris', 'kambang']
// function capitalise(array) {
//     for (let index = 0; index < array.length; index++) {
//         let name = array[index];
//         let name2 = name.charAt(0)
//         let name3= name2.toUpperCase() + name.slice(1);
//         console.log(name3);
        
//     }
    
// }
// capitalise(names)

const result = names.map(name =>{
    let first = name[0].toUpperCase() ;
let second = name.slice(1)
   let name2 = first+second
    return name2
})
console.log(result);
