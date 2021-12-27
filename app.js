const express = require("express");
const pg=require("./app/adapters/database/postgresql");
const app = express();
//const vehicleRoute = require("./app/routes/vehicleRoute");
const deviceRoute = require('./app/routes/deviceRoute');
//const logTemperatureRoute = require("./app/routes/logTemperatureRoute");
//const logLocationRoute = require("./app/routes/logLocationRoute");
//const deviceTypeRoute = require("./app/routes/deviceTypeRoute");

app.use(express.urlencoded({ extended: true }));//JSON veri tipinde gelecek olan dataların kullanılabilmesi için bu tanımlamanın yapılması gerekmektedir.
app.use(express.json());Encode//(kodlanmış/şifrelenmiş) edilmiş urller üzerinde Body-Parser’ı kullanmak istiyorsanız eğer “extended” özelliğine true değerini vermeniz yeterlidir.

app.use("/vehicle",vehicleRoute);
app.use("/device",deviceRoute);
app.use("/device_type", deviceTypeRoute);
app.use("/log_temperature", logTemperatureRoute);
app.use("/log_location", logLocationRoute);

app.get('/', function (req, res) {
    res.send('Inavitas Çalışması')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Sunucu çalışıyor ${port}`);
});


