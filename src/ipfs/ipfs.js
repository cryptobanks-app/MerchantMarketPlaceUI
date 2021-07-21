const { create, globSource } = require('ipfs-http-client')
const ipfs = create()

async function uploadFile (path) {
    const file = await ipfs.add(globSource(path, { recursive: false }))

    console.log(path)
    console.log(file)
}

export default uploadFile;