const { readFile, writeFile} = require('fs').promises



const firstPath = './content/first.txt'
const secondPath = './content/second.txt'
const newFile = './content/result-mind-frenade.txt'

//const util = require("util")
//const readFilePromisse = util.promisify(readFile)
//const writeFilePromisse = util.promisify(writeFile)

/* const getText = (path) => {
    return new Promise( (resolve, reject) => {
        readFile(path, 'utf8', (err,data)=>{
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
        })

    } )
}*/


//getText(first)
//.then((result) => console.log(result))
//.catch( (err) => console.log(err))

const start = async() =>{
    try {
        //const first = await getText(firstPath);
        //const second = await getText(secondPath)
        const first = await readFile(firstPath,'utf8');
        const second = await readFile(secondPath, 'utf8');
        console.log(first, second)
        await writeFile(newFile, 
            `This is AWESOME: ${first},\n${second}`)
        
    } catch (error) {
        console.log(error)
    }

}

start()