var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
function countFruits(obj) {
    let total = 0;
    for(let key in obj){
        total += obj[key];
        console.log(obj[key]);
    }
    return total;
}