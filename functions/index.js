export default async function (instance, opts, done) {
    instance.get('/', async (req, res) => {
        res.send({ ip: req.headers['x-forwarded-for'] })
    })
    
    done()
}
