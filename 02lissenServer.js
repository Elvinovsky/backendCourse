 const http = require('http')
 const fs = require('fs')
//это старая модель сервака без промисикации
 /*const server = http.createServer((request, response) => {
     switch (request.url) {
         case '/home': {
             fs.readFile('pages/about.html',(err, data) =>{
                 if(err) response.write('500, some error occured')
                 else response.write(data)
                 response.end()
             })
             break;
         }
         case '/about': {
             fs.readFile('pages/home.html',(err, data) => {
                 if (err) response.write('500, some error occured')
                 else response.write(data)
                 response.end()
             })

             break;
         }
         default: {
             response.write('404 not found')
             response.end()
         }
     }
 })
*/

 const delay = (ms) => {
     return new Promise ((resolve, reject) => {
         setTimeout(() => {
             resolve()
         }, ms)
             reject('error')
     })
 }
 const readFile = (path) => {
     return new Promise ((resolve, reject) => {
         fs.readFile(path,(err, data) =>{
             if(err) reject(err)
             else resolve (data)
         })
     })
 }

 const server = http.createServer(async (request, response) => {
         switch (request.url) {
             case '/home': {
                 try {
                     const data = await readFile('pages/about.html')
                     response.write(data)
                     response.end()
                 } catch (error) {
                     response.error('error balun')
                     response.end()
                 }
             break;
         }

             case '/about1': {
                 try {
                     await delay(3000)
                     response.write('sdelano na poxyi')
                     response.end()
                 } catch {
                     response.error("uf....")
                     response.end()
                 }
             break;
             }

         default: {
             response.write('404 not found')
             response.end()
             }
         }
 })
 server.listen(3680)