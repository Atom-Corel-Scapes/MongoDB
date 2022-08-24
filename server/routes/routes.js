export const getData = (req, res) => {
    console.log('Coimg here second');
    res.send(`Hello Js ${req.query.name}`)
}

export const getDataByName = (req, res) => {
    res.send(`Hello by Name ${req.params.name}`)
}

export const postData = (req, res) => {
    console.log(req.body.password, 'inside post')
    res.send(req.body)
}