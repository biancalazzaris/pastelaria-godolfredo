const mongoose = require('mongoose');
const DBCON = 'mongodb+srv://pastel:teste123@cluster0.tw1tk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DBCON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, 
    useFindAndModify: false, 
}).then(() => {
    console.log('MONGODB IS RUNNING"');
}).catch((error) => {
console.log(`MONGODB is STOPED!! BECAUSE ${error}`);
});

mongoose.Promise = global.Promise;
module.exports = mongoose;