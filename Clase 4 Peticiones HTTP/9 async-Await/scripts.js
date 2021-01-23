/*  const getName = async ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Dorian')
        }, 1500)
    })
}

const getSaludo = async () =>{
    const name = await getName();
    return `Hello ${name}`
}

getSaludo().then(res=>console.log(res))  */

const users = [{ id: 1, name: 'Dorian' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }]

const emails = [{ id: 1, email: 'dorian@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]

/* const getUser = async (id) =>{
    const user = users.find(user =>user.id==id);

    setTimeout(() => {
        if(!user) throw new Error(`Doesn't exist an user with id ${id}`)
        else return user
    }, 1000);
    

      
}

const getEmail =async(user)=>{
    const email = emails.find(email =>email.id==user.id)
    if (!email) throw new Error(`${user.name} hasn't email`)
    else return ({
        id: user.id,
        name: user.name,
        email: email.email
    })
}

const getInfo = async(id) =>{

    try {
        const user = await getUser(id);
        const email = await getEmail(user);
        return `${user.name} email is ${email.email}`
    } catch (error) {
        console.log(error)
    }

}
getInfo(1).then(res =>console.log(res)); */


const getUser = async (id) => {
    const user = users.find(user => user.id == id)

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (!user) reject(`Doesn't exist an user with id ${id}`)
            else resolve(user)  
        }, 1000);
    })

}

const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id)
    if (!email) throw new Error(`${user.name} hasn't email`)
    else return ({
        id: user.id,
        name: user.name,
        email: email.email
    })
}

const getInfo = async (id) => {
    try {
        const user = await getUser(id)
        const res = await getEmail(user)
        return `${user.name} email is ${res.email}`
    } catch (error) {
        console.log(error)
    }
}

getInfo(6).then(res => console.log(res))