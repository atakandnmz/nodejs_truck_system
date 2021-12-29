const express = require("express");
const pg=require("./app/adapters/database/postgresql");
const app = express();
const vehicleRoute = require("./app/routes/vehicleRoute");
const deviceRoute = require('./app/routes/deviceRoute');
const logTemperatureRoute = require("./app/routes/logTemperatureRoute");
const locationRoute = require("./app/routes/locationRoute");
const deviceTypeRoute = require("./app/routes/deviceTypeRoute.js");

app.use(express.urlencoded({ extended: true }));//JSON veri tipinde gelecek olan dataların kullanılabilmesi için bu tanımlamanın yapılması gerekmektedir.
app.use(express.json());//Encode(kodlanmış/şifrelenmiş) edilmiş urller üzerinde Body-Parser’ı kullanmak istiyorsanız eğer “extended” özelliğine true değerini vermeniz yeterlidir.

app.use("/vehicle",vehicleRoute);
app.use("/device",deviceRoute);
app.use("/device_type", deviceTypeRoute);
app.use("/log_temperature", logTemperatureRoute);
app.use("/log_location", locationRoute);

app.get('/', function (req, res) {
    res.send('Inavitas Çalışması')
})

app.listen(3000, () => {
  console.log('Sunucu çalışıyor..');
});

