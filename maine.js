let form = document.getElementById ("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("button is clicked")
    formValidation() 
})

let formValidation = ()=>{
    if(input.value ===""){
        msg.innerHTML = "Post cannnot be blank"
        console.log("failure")
    }
    else{
        console.log("success")
        msg.innerHTML = ""
        acceptData()
    }
}

let data = {}

let acceptData = ()=> {
    data["text"] = input.value
    console.log(data)
    createPost()
}

let createPost = ()=>{
    posts.innerHTML +=`
    
<div>
    <p>${data.text}</p>
    <span class="options">
        <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
        <i onClick="deletePost(this)" class="fa-solid fa-trash"></i>
    </span>
</div>
    ` 
    input.value = ""
}

let deletePost = (e)=> {
    e.parentElement.parentElement.remove()
}

let editPost = (a)=> {
    input.value = a.parentElement.previousElementSibling.innerHTML
    a.parentElement.parentElement.remove()
}