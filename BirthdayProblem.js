//Calculate P(A′), the probability that no two people in the room have the same birthday. 
//  i = P(A′) = number of permutations of k different numbers/number of all permutations
let k=1, i=1;
for (k=1; i>0.5; k++) {
    i*=(366-k)/365;
}
console.log(i,'\n', k-1);

// https://playcode.io/new/
//0.4927027656760144
//23

//Replace 0.5 with 0.8
