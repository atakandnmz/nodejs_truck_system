const db = require("../adapters/database/postgresql");

// ==> device için yanıt verme:
exports.createDevice = async (req, res) => {
  const { vehicle_id, device_type_id, device_name, is_online, is_active } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO devices (vehicle_id, device_type_id, device_name, is_online, is_active) VALUES ($1, $2, $3, $4, $5)",
      [vehicle_id, device_type_id, device_name, is_online, is_active]
    );
    res.status(201).send({
      message: "Device added successfully!",
      body: {
        devices: { vehicle_id, device_type_id, device_name, is_online, is_active },
      },
    });
  } catch (error) {
    console.error('createDevice', error);
    res.status(500).send({
      message: "Hata"
    });
  }
};

// ==> Device için listeleme:
exports.getAllDevice = async (req, res) => {
  try {
    const { rows } = await db.query(`SELECT 
                                      *  
                                    FROM devices`);
    res.status(200).send(rows);
  } catch (error) {
    console.error('getAllDevice', error);
    res.status(500).send({
      message: "db liste bulunamadı"
    });
  }
};


// ==> güncelleme işlemi:
exports.updateDeviceById = async (req, res) => {
  const { id } = req.params;
  try {
    const { vehicle_id, device_type_id, device_name, is_online, is_active  } = req.body;
    const { rows } = await db.query(`UPDATE device 
                                    SET vehicle_id = $1, 
                                    device_type_id = $2, 
                                    device_name = $3, 
                                    is_online = $4, 
                                    is_active = $5 
                                    WHERE id = $6`,
      [vehicle_id, device_type_id, device_name, is_online, is_active,id]
    );
    res.status(200).send({ message: "Device Updated Successfully!" });
  } catch (error) {
    console.error('updateDeviceById', error);
    res.status(500).send({
      message: "HAta."
    });
  }
};

// ==> Device Id silme işlemi
exports.deleteDeviceById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM devices WHERE id = $1", [id]);
    res.status(200).send({ message: "Device deleted successfully!" });
  } catch (error) {
    console.error('deleteDeviceById', error);
    res.status(500).send({
      message: "Hata."
    });
  }
};