const fs = require('fs');

async function createFile() {
    try {
        await fs.promises.writeFile('newFiletxt', 'Hello world');
        console.log('File has been created successfully');
    }
    catch (error){
        console.error('Error while creating file '. error);
    }
}
createFile();