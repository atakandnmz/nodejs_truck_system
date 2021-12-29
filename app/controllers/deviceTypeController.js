const res = require("express/lib/response");
const db=require("../adapters/database/postgresql");

const getAllDeviceType=(req,res)=>{
    db.query('SELECT * FROM devices_type ORDER BY id DESC',(err,results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    });
};
const addDeviceType=(req,res)=>{
    const device_type=req.body;
    db.query(
        `INSERT INTO devices_type(device_name,device_description)
        VALUES ('${device_type.device_name}','${device_type.device_description}')`,
        (err,results)=>{
            if(err){
                throw error;
            }
            res.status(201).send({
                message: "Device added successfully!"
            })
        }
    )
}
const deleteDeviceType = (req, res) => {
    const device_type = req.body;
  
    pool.query(
      `DELETE FROM devices_type WHERE id = '${device_type.id}'`,
      (error, results) => {
        if (error) {
          throw error;
        }
        res.send(200, () => {
          console.log(`Device type with ID: ${device.id} deleted.`)
        });
      }
    );
  };
  
  module.exports = {
    getAllDeviceType,
    addDeviceType,
    deleteDeviceType,
  };
