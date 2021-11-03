let myTodo = document.getElementById('myTodo'),
    addItem = document.getElementById('addItem'),
    ul = document.getElementById('ul');



addItem.onclick = () => {
    let todoVal = myTodo.value;
    let upp = todoVal.charAt(0);
    let _upp = upp.toUpperCase();
    let slc = todoVal.slice(1);
    let word = `${_upp}${slc}`;
    let toDoList = document.createTextNode(word);
    let createList = document.createElement('li');
    let del = document.createElement('button');

    del.innerHTML = "x";
    del.onclick = () => {
        createList.remove()
    };
    createList.appendChild(toDoList);
    createList.appendChild(del);
    createList.style.display = 'flex'
    createList.style.justifyContent = 'space-between'
    ul.appendChild(createList);
    document.body.appendChild(ul);
}