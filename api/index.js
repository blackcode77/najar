const bodyParser = require('body-parser')
const app = require('express')()
const express = require('express')
const fs = require('fs')
const path = require('path')

filePath = path.join(__dirname, '../data/page.json');

app.use(bodyParser.json())
app.use(express.json())

app.all('/getPageData', (req, res) => {

    let data = null

    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data_){
        if (!err) {
            data = data_
        } else {
            console.log(err);
        }
        res.json({ data })
    });

})

app.all('/savePageData', (req, res) => {

    body = req.body

    fs.writeFileSync(filePath, JSON.stringify(body))


    let data = null

    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data_){
        if (!err) {
            data = data_
        } else {
            console.log(err);
        }
        res.json({ data })
    });
})

app.all('/login', (req, res) => {

    const login = req.body.login
    const password = req.body.password

    this.$store.commit('modules/common/user/LOGIN', true)
})

module.exports = app
