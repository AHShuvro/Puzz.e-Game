onload = function () {
    let parent = document.getElementById('puzzle-drag');
    let fragment = document.createDocumentFragment();
    let childrenArray = Array.from(parent.children);
    while (childrenArray.length) {
        let randomIndex = Math.floor(Math.random() * childrenArray.length);
        fragment.appendChild(childrenArray[randomIndex]);
        childrenArray.splice(randomIndex, 1);
    }
    parent.appendChild(fragment);
}

const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
}

const dropOver = (event) => {
    event.preventDefault();
}

const drop = (event) => {
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    event.preventDefault();
}
