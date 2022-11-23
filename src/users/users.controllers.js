const usersDB = []
let id = 1

// {
//     "firts_name": "Iliana",
//     "last_name": "Gonzalez",
//     "email": "ili@gmail.com",
//     "password": "poiu0987",
//     "birthday": "27/10/1989",
//     "country": "Mexico"
// }

const findAllUsers = () => {
    return usersDB
}

const findUserById = (id) => {
    const filteredUser = usersDB.find(user => user.id == id)
    return filteredUser
}

const createNewUser = (obj) => {
    const newUser = {
    id: id++,
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email,
    password: obj.password,
    birthday: obj.birthday || 'birthday unknown',
    country: obj.country || 'country unknown'
    }
    usersDB.push(newUser)
    return newUser
}

const findRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * usersDB.length)
    return usersDB[randomIndex]
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
    findRandomUser
}