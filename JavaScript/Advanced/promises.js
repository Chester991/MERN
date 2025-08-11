function walkdog(callback) {
    setTimeout(() => {
        console.log("You walk the dog");
        if (callback) callback();
    }, 1500);
}

function cleankitchen(callback) {
    setTimeout(() => {
        console.log("You clean the kitchen");
        if (callback) callback();
    }, 2500);
}

function takeouttrash(callback) {
    setTimeout(() => {
        console.log("Take out the trash");
        if (callback) callback();
    }, 500);
}

walkdog(() => {
    cleankitchen(() => {
        takeouttrash(() => {
            console.log("You finished all the chores");
        });
    });
});
