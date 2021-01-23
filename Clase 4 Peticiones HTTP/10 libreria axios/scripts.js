const button = document.getElementById('button');

button.addEventListener("click",()=>{
    axios({
        method:"GET",
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(res=>{
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for (const userInfo of res.data) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    }).catch(err => console.log(err))
})