let array = [1,4,5,6,7,8,9,10,99,250];
let item = 5;

console.log(binarySearch(array, item, 0, array.length - 1));

function binarySearch(array, item, l, r)
{
    if(r >= l) {
        let index = Math.floor(l + (r - l) / 2);

        if(array[index] === item) {
            return index;
        }

        if(array[index] > item) {
            return binarySearch(array, item, l, index - 1);
        }else {
            return binarySearch(array, item, index + 1, r);
        }
    }

    return -1;
}