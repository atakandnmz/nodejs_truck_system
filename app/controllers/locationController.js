const db= require("../adapters/database/postgresql");

exports.getGPS = (req, res) => {
  db.query("SELECT * FROM log_location ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

exports.addGPS = (req, res) => {
  const log_location = req.body;

  db.query(
    `INSERT INTO log_location (vehicle_id,device_id,latitude,longitude,created_at) 
    VALUES ('${log_location.vehicle_id}','${log_location.device_id}','${log_location.latitude}','${log_location.longitude}',${log_location.created_at})`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(201, () => {
        console.log('location send')
      });
    }
  );
};


