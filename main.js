"use strict";
// let todo_items = data.map(item => item.title)
let todo_items = ["Do HomeWork", "Fix The Car"]

class UI {
    static displayItems () {
        todo_items.forEach((item) => UI.addItemToList(item))
    }

    static addItemToList (item) {
        this.todo_list = document.querySelector('#todo-list');
        let li = document.createElement('li');
        li.classList.add('todo-item')
        li.innerHTML = `${item} <img src="imgs/x.svg" class="close">`;
        // li.setAttribute('item-number', id);
        // id++;
        this.todo_list.appendChild(li);
    }

    static completJob (e) {
        if (e.target.classList.contains('todo-item')){
            const completedJob = e.target.innerText
            const completedJobList  = document.querySelector('#completed-jobs')
            const li = document.createElement('li')
            li.innerHTML = `<i class='fa fa-check-circle'></i><span class='text-barred'>${completedJob}</span>`
            completedJobList.appendChild(li)
            e.target.remove()
            
        }
    }

    static removeJob (e) {
        if (e.target.classList.contains('close')){
            if (confirm('Are you sure ...')){
                e.target.parentElement.remove()
            }
        }
    }

    static submitForm (e) {
        e.preventDefault();
        let item = document.querySelector('#todo-item-input').value;
       

        if (item === '') {
            // msg.classList.add('error');
            // msg.innerHTML = 'Please Enter Something';

            alert('Please Enter Something')
    
            setTimeout(() => msg.remove(), 3000);
        } else {
            UI.addItemToList(item);
            UI.clearFields();
        }
    }    

    static clearFields() {
        document.querySelector('#todo-item-input').value = '';
    }

}

const todo_list = document.querySelector('#todo-list')
todo_list.addEventListener('click', UI.completJob)
todo_list.addEventListener('click', UI.removeJob)
const addBtn = document.querySelector('#add-btn')
addBtn.addEventListener('click', UI.submitForm)
UI.displayItems();