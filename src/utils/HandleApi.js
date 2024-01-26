import axios from 'axios'

const baseUrl = "https://todo-backend-iabg.onrender.com"

const getAllToDo = (setToDo) => {

axios

.get(baseUrl)

.then(({data}) => {

console.log('data --->', data);

setToDo(data)

})

}
const addToDo = (text,setText,setToDo) => {
    axios

.post(`${baseUrl}/save`, {text})

.then((data) => {

console.log(data);

setText("")

getAllToDo(setToDo)


})
.catch((err)=>console.log(err))
}
const updateToDo = (toDoId,text,setToDo,setText,setisUpdating) => {
    axios

.post(`${baseUrl}/update`, {_id:toDoId,text})

.then((data) => {
setText("")
setisUpdating(false)
getAllToDo(setToDo)
})
.catch((err)=>console.log(err))
}
const deleteToDo = (_id, setToDo) => {

    axios
    
    .post(`${baseUrl}/delete`, {_id})
    
    .then((data) => {
    console.log(data)
    getAllToDo(setToDo)
    
    })
    
    .catch((err) => console.log(err))
    
    }

export {getAllToDo,addToDo,updateToDo,deleteToDo}