const axios= require("axios")
const args = process.argv[2]

const finalUrl=`https://jobs.github.com/positions.json?description=${args[0]}&location="${args[1]}`
axios.get(finalUrl)

.then(response=>{

for(index=0;index<(response.data.length);index++){
    console.log("Job Title :"+ response.data[index].title)
    console.log("Company Name :"+ response.data[index].company)
}

})
.catch(error=>{

    console.log(" You got error" + error)
})
.finally(()=>{

    console.log("You are done with search")
})