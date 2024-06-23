const {Router} = require("express");
const { getToDo, saveToDO, DeleteToDO, UpdateToDO } = require("../Controllers/ToDOController");
const router = Router()


router.get("/", getToDo);
router.post("/save", saveToDO);
router.delete("/delete", DeleteToDO); //delete can be a post request also.
router.patch("/update", UpdateToDO);

module.exports =  router;