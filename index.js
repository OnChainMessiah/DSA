// Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
// Example:
// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements 4, 7, 2 )
// Give a solutions to this problem, using arrays

// ALGORITHM sum_distinct_elements

// VAR
//     A : ARRAY[ ] OF INTEGER;   // Set 1
//     B : ARRAY[ ] OF INTEGER;   // Set 2
//     i, j : INTEGER;
//     found : BOOLEAN;
//     sum : INTEGER := 0;

// BEGIN

//     
//     FOR i FROM 0 TO length(A) - 1 DO
//         found := FALSE;

//         FOR j FROM 0 TO length(B) - 1 DO
//             IF A[i] = B[j] THEN
//                 found := TRUE;
//                 BREAK;
//             END_IF
//         END_FOR

//         IF found = FALSE THEN
//             sum := sum + A[i];
//         END_IF
//     END_FOR


//     
//     FOR i FROM 0 TO length(B) - 1 DO
//         found := FALSE;

//         FOR j FROM 0 TO length(A) - 1 DO
//             IF B[i] = A[j] THEN
//                 found := TRUE;
//                 BREAK;
//             END_IF
//         END_FOR

//         IF found = FALSE THEN
//             sum := sum + B[i];
//         END_IF
//     END_FOR

//     Write(sum);

// END

// Javscript

function sumDistinct(arr1, arr2) {
    let sum = 0;


    for (let i = 0; i < arr1.length; i++) {
        let found = false;

        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            sum += arr1[i];
        }
    }


    for (let i = 0; i < arr2.length; i++) {
        let found = false;

        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            sum += arr2[i];
        }
    }

    return sum;
}

let A = [3,1,7,9];
let B = [2,4,1,9,3];
console.log(sumDistinct(A,B));


// Problem 2 
// You are asked to write an algorithm that fulfill the following: 

// Name: Dot product
// Description:
// Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
// Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
// Modify the previous algorithm if you use a dot_product function instead of a procedure.


// PROCEDURE dot_product(v1, v2 : ARRAY OF INTEGER, size : INTEGER, VAR ps : INTEGER)
// VAR
//     i : INTEGER;
// BEGIN
//     ps := 0;

//     FOR i FROM 0 TO size - 1 DO
//         ps := ps + (v1[i] * v2[i]);
//     END_FOR
// END

// ALGORITHM check_orthogonal_vectors

// VAR
//     n, i, j, size : INTEGER;
//     v1, v2 : ARRAY[100] OF INTEGER;
//     ps : INTEGER;

// BEGIN
//     Read(n);   

//     FOR i FROM 1 TO n DO

//         Write("Enter size of vectors:");
//         Read(size);

        
//         FOR j FROM 0 TO size - 1 DO
//             Read(v1[j]);
//         END_FOR

//         
//         FOR j FROM 0 TO size - 1 DO
//             Read(v2[j]);
//         END_FOR


//         dot_product(v1, v2, size, ps);

//         IF ps = 0 THEN
//             Write("Pair ", i, " is orthogonal");
//         ELSE
//             Write("Pair ", i, " is not orthogonal");
//         END_IF

//     END_FOR

// END

// Javascropt Version


function dotProduct(v1, v2) {
    let ps = 0;

    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }

    return ps;
}


function isOrthogonal(v1, v2) {
    return dotProduct(v1, v2) === 0;
}


function checkOrthogonalPairs(pairs) {
    for (let i = 0; i < pairs.length; i++) {
        let v1 = pairs[i][0];
        let v2 = pairs[i][1];

        if (v1.length !== v2.length) {
            console.log(`Pair ${i + 1} has unequal vector sizes`);
            continue;
        }

        let ps = dotProduct(v1, v2);

        if (ps === 0) {
            console.log(`Pair ${i + 1} is orthogonal`);
        } else {
            console.log(`Pair ${i + 1} is not orthogonal`);
        }
    }
}




let pairs = [
    [[1, 2], [2, -1]],       
    [[1, 2, 3], [4, 5, 6]],  
    [[3, 0], [0, 5]]         
];

checkOrthogonalPairs(pairs);

