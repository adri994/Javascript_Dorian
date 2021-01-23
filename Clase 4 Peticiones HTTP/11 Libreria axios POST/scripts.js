const button = document.getElementById('button');

button.addEventListener("click",()=>{
    axios({
        method:"POST",
        url:'https://jsonplaceholder.typicode.com/post',
        data:{
            title: 'A new post',
            body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            userId: 1
        }
    }).then(res=>console.log(res.data))
        .catch(error=>console.log(error))
})