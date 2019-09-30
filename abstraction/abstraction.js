// First loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Can we abstract "do something N times" to a function that does that?

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

// But can this function "do something N times" do more than just console.log??

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);


// Modo super magia negra e tralala

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]