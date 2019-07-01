import { Client } from 'pg'
const connectionString = 'postgres://ycmzalab:O79W1Kideuf0REmxnwhHC0Uj5288MA6a@raja.db.elephantsql.com:5432/ycmzalab'


export const usersGetAll = (req, res) => {

    const client = new Client({connectionString})
    client.connect()    
    client.query("select id, name, age, gender from persons", (err, results) => {
        if (err) {
            client.end()
            res.status(500).send(err)
        } else { 
            client.end()
            res.send(JSON.stringify(results.rows))
        }
    })

}

export const userCreate = (req, res) => {
    const {name, age, gender, password} = req.body
    const client = new Client({connectionString})
    client.connect()  
    
    client.query(`insert into persons (name, age, gender, password) values ('${name}', '${age}', '${gender}', '${password}')`, (err, results) => {
        if (err) {
            console.log(err)  
            client.end()
            res.status(500).send(err)
        } else { 
            client.end()
            res.send(JSON.stringify(results.rows))
        }
    })

}

export const userDel = (req, res) => {
    const { id } = req.body
    const client = new Client({connectionString})
    client.connect()    
    client.query(`delete from persons where id=${id}`, (err, results) => {
        if (err) {
            client.end()
            res.status(500).send(err)
        } else { 
            client.end()
            res.send(JSON.stringify(results.rows))
        }
    })
}