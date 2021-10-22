const axios = require('axios');
const {addOrUpdateEmployee} = require('./dynamo')

const seedData = async()=>{
    const url = "https://reqres.in/api/users/";
    try{
        const {data:employees} = await axios.get(url);
        // console.log('xx', employees)
        const employeePromises = employees.data.map((employee)=>
            addOrUpdateEmployee({ ...employee})
        )
        await Promise.all(employeePromises);

    } catch(err){
        console.error(err)
    }
}

// const seedData = async()=>{
//     const url = "http://hp-api.herokuapp.com/api/characters";
//     try{
//        const {data: characters} = await axios.get(url);
//        const characterPromises = characters.map((item, i)=>
//         addOrUpdateCharacter({ ...characters, id: i+''})
//        )
//        await Promise.all(characterPromises)
//     } catch(err){
//         console.error(err);
//     }
// }

seedData();