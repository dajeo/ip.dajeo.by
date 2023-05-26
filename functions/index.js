export default async function (instance, opts, done) {
    instance.get('/', async (req, res) => {
        res.send({ ip: req.connection.remoteAddress })
    })
    
    done()
}
