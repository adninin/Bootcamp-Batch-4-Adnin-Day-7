//Require atau import readline//
const readline = require('readline');

//Interface untuk input dan output//
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Require atau import FileSync//
const fs = require('fs');

//Require atau import npm validator *jangan sampe lupa//
const validator = require('validator');
const { resolve } = require('path');
const { default: isEmail } = require('validator/lib/isemail');
const { default: isISO31661Alpha2 } = require('validator/lib/isiso31661alpha2');

//Menanyakan folder data ada atau tidak//
const dirPath = './data';

//Membuat folder data apabila folder data belum exist//
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

//Menanyakan file contact.json ada atau tidak//
const dataPath = './data/contact.json';

//Membuat file contact.json apabila file belum exist//
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8'); //Menggunakan kurung siku [] karena filenya berformat json//
}

//Membuat fungsi untuk pertanyaan//
const ques = (questions) => {
    return new Promise((resolve, reject) => {
        rl.question(questions, (feedback) => {
            resolve(feedback)
        })
    })
}

//Savedata app1//
const savedata = (name,email,num,add) => {

    //Peringatan yang akan muncul apabila nama yang diisi salah//
    if (!validator.isAlpha(name, 'en-US', {ignore:' '})){
        console.log('Nama tidak valid!');
        //Menutup program secara otomatis apabila data yang dimasukkan salah//
        rl.close();
        return(false)
    }

    //Peringatan yang akan muncul apabila email yang diisi salah//
    if (!validator.isEmail(email)) {
        console.log('Email tidak valid!');     
        //Menutup program secara otomatis apabila data yang dimasukkan salah//
        rl.close();
        return(false)
     }

    //Peringatan yang akan muncul apabila nomor yang diisi salah//
    if (!validator.isMobilePhone(num, 'id-ID')) {
        console.log('Nomor tidak valid!');
        //Menutup program secara otomatis apabila data yang dimasukkan salah//
        rl.close();
        return(false)
    }

    //Menghubungkan data yang diisi dari CLI ke json//
        const contact = { name, email, num, add };
        const file = fs.readFileSync('data/contact.json', 'utf-8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFileSync('data/contact.json', JSON.stringify(contacts));


             //Menutup program secara keseluruhan//
             rl.close(); 
}

//Ekspor function *taronya diakhir ygy//
module.exports = {ques,savedata}