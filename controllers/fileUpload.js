const File = require("../models/file")

exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file
        console.log(file)

        let path = __dirname + "/files/" + Date.now() + "."+`${file.name.split('.')[1]}`
        console.log(path)
        file.mv(path, (e) => {
            console.log(e)
        })

        res.json({
            success: true,
            message: "LOCAL FILE UPLOADED SUCCESSFULLY"
        })
    } catch (e) {
        console.log(e)
    }
}