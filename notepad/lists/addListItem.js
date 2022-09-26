let addbtn = document.querySelector(".add");

addbtn.addEventListener('click', addtask);

function addtask () { 

    let task = document.querySelector('.task');
    let input = document.querySelector(".input");
    let inp = input.value;

    if (inp !== ""){

        let element = document.createElement('li')
        let img = document.createElement('img')

        element.appendChild(document.createTextNode(inp));

        img.src = 'img/delete-icon.svg';

        img.classList.add(".delete-icon");
        element.appendChild(img);

        element.classList.add("task-items");
        task.appendChild(element);

        img.addEventListener('click', deleteItem );

        function deleteItem () {
            let parentItem =  img.parentElement;
            task.removeChild(parentItem)
        }
    }
}