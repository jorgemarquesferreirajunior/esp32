const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECT)
.then(() => {
    console.log("Conectado ao MongoDB!");
})
.catch((err) => {
    console.error("Erro na conexão ao MongoDB:", err);
});