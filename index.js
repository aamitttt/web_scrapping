const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://time.com/';

const data =[];
const main= async ()=>{

   
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);

    

    const x = $('.latest-stories__item');
    x.each((idx,ele)=>
    {
        if(idx<6){
        const newData ={
          title: $(ele).find('a').text().trim(),
          url: "https://time.com"+$(ele).find('a').attr('href')
          
        }
        data.push(newData);
    }
    })

    console.log(data);
    
}

main();

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})