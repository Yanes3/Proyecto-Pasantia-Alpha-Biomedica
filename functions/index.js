const functions = require('firebase-admin');
const admin = requiere('firebase-admin');

admin.initializeApp();
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = functions.https.onRequest((request, response) => {
   response.send("Hola Tonotos");
 });

 exports.getScreams = functions.https.onRequest((req,res) =>{
  admin.firestore().collection('screams').get()
  .then(data =>{
    let screams = [];
    data.forEach(doc => {
      screams.push(doc.data());
    });
    return res.json(screams);
  })
  .catch((err) => console.error(err));
 })