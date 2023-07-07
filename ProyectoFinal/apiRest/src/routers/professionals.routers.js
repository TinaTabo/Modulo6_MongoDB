const { Router } = require('express');
const router = Router();
const proCtrl =  require('../controller/professionals.controller');

router.get("/profesionales", proCtrl.getPro);
router.post("/profesionales", proCtrl.postPro);
router.put("/profesionales", proCtrl.putPro);
router.delete("/profesionales", proCtrl.delPro);

module.exports = router;