const express = require('express')
const devicesController = require('../controllers/devicesController')
const router = express.Router()

router.route('/device_list').get(devicesController.getAllDevice)
router.route('/device_add').post(devicesController.createDevice)
router.route('/device_update').patch(devicesController.updateDeviceById)
router.route('/device_delete/:id').delete(devicesController.deleteDeviceById)

module.exports = router