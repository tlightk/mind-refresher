// create an array class with the insert, deleteAt, and indexAt method
// if the array if full, increase the size of the array and insert at the end
class ArrayClass {
    constructor(length) {
        this.numbers = new Array(length);
        // keep track of how many items are added
        this.count = 0;
    }

    insert(value) {
        // if count is the length of array, create a new array
        // set the new array's length
        // copy over all previous items
        // increment count by 1
        // else add the item and increment count by 1
        if (this.count === this.numbers.length) {
            const items = [...this.numbers, value];
            this.numbers = new Array(this.count + 1);

            for (let i = 0; i < this.numbers.length; i++) {
                this.numbers[i] = items[i];
            }

            this.count++;
        } else {
            this.numbers[this.count] = value;
            this.count++;
        }
    }

    removeAt(index) {
        // best case: if last item, just remove (O(1))
        // worst case: remove at index, then shift all following numbers down (O(n))
        // first, validate index
        // don't forget to adjust count accordingly
        if (index < 0 || index >= this.count || typeof index !== "number") {
            throw Error("Error! Invalid index input detected! *Asplodes*");
        } else {
            const items = [...this.numbers];
            let loopCount = 0;
            this.count--;
            this.numbers = new Array(this.numbers.length - 1)
            for (let i = 0; i < items.length; i++) {
                if (i !== index) {
                    this.numbers[loopCount] = items[i];
                    loopCount++;
                }
            }
        }

    }

}

const test = new ArrayClass(3);
test.insert(10);
test.insert(20);
test.insert(30);
test.insert(40);
test.removeAt(3);
console.log(test);

console.log("change profile email")