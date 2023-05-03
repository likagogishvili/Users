exports.deleteRecord = async (req, res, next) => {
    try {
        const { id } = req.body
        console.log(id)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
};
