var items = [5, 3, 7, 6, 2, 9];
var sortedArray = quicksort(items, 0, items.length - 1);

console.log(sortedArray);

function quicksort(items, left, right) {
    let index;

    if (items.length > 1) {
        index = partition(items, left, right);

        if(left < index - 1) {
            quicksort(items, left, index - 1);
        }

        if(index < right) {
            quicksort(items, index, right)
        }
    }

    return items;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)]
    i = left;
    j = right;

    while(i <= j) {
        while(items[i] < pivot) {
            i++;
        }

        while(items[j] > pivot) {
            j--;
        }

        if(i <= j) {
            let temp = items[i];
            items[i] = items[j];
            items[j] = temp;
            i++;
            j--;
        }
    }

    return i;
}