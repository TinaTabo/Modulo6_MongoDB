const { Router } = require('express');
const router = Router();
const photosCtrl =  require('../controller/photo.controller');

router.get("/photos", photosCtrl.getPhotos);
router.post("/photos", photosCtrl.postPhotos);
router.put("/photos", photosCtrl.putPhotos);
router.delete("/photos", photosCtrl.delPhotos);

module.exports = router;