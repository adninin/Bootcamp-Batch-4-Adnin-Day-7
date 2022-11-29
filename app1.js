//Import atau require pertanyaan//
const question = require ('./app.js')

//Deklarasi pertanyaan menggunakan metode asynchronous//
const main = async () => {

    //Menanyakan nama//
    var name = await question.ques('What is your name? ');

    //Menanyakan email//
    var email = await question.ques('What is your email? ');

     //Menanyakan nomor//
    var num = await question.ques('What is your number? ');

    //Menanyakan alamat//
    var add = await question.ques('What is your address? ');

    //Mengucapkan terimakasih karena sudah mengisi data//
    console.log('Thank you for coming!');

    //Savedata app//
    question.savedata(name,email,num,add)
      }

main()
