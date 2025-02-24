function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        decreament: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    }

}