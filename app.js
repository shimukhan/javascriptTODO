const form = document.querySelector('#task-form')
const tasklist = document.querySelector('.collection')
const taskinput = document.querySelector('#task')
const clearbtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')

loadEventListeners();

function loadEventListeners(){
    // add task
   form.addEventListener('submit' , addtask)
//    remove task
    tasklist.addEventListener('click', removeTask)
    // clearbtn
    clearbtn.addEventListener('click',cleartask)

    // filter
    filter.addEventListener('keyup',filtertask)
}

// add task
function addtask(e){
   if(taskinput.value === ''){
       alert("please add task")
   }

   const li = document.createElement('li')
   li.className="collection-item"
   li.appendChild(document.createTextNode(taskinput.value))

   const link = document.createElement('a')
   link.className="delete-item secondary-content"
   link.innerHTML='<i class="fa fa-remove"></i>'
   li.appendChild(link)
   tasklist.appendChild(li)

   taskinput.value=''
    e.preventDefault();
}
// remove task

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('are you sure')){
            e.target.parentElement.parentElement.remove()
        }
    }
   
    
}

// clearallbtn

function cleartask(e){
    tasklist.innerHTML=""
    e.preventDefault();
}

// filter task

function filtertask(e){
const text = e.target.value.toLowerCase();
document.querySelectorAll('.collection-item').forEach(function(task){
const item = task.firstChild.textContent;
if(item.toLowerCase().indexOf(text) != -1){
    task.style.display="block"
}else{
    task.style.display="none"
}
})



}