const { pool } = require("../adapters/database/postgresql");

exports.getAllDevices = async (req, res) => {
  await pool.query(
    "SELECT vehicle_id, device_type_id, device_name, is_active FROM devices",
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};