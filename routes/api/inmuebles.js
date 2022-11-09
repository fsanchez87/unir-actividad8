const router = require("express").Router();

const Inmueble = require("../../models/inmueble.model");

router.get("/", async (req, res) => {
    try {
        const inmuebles = await Inmueble.find();
        res.json(inmuebles);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const newInmueble = await Inmueble.create(req.body);
        res.json(newInmueble);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.put("/:inmuebleId", async (req, res) => {
    try {
        const { inmuebleId } = req.params;
        const inmueble = await Inmueble.findByIdAndUpdate(
            inmuebleId,
            req.body,
            {
                new: true,
            }
        );
        res.json(inmueble);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.delete("/:inmuebleId", async (req, res) => {
    try {
        const { inmuebleId } = req.params;
        const inmueble = await Inmueble.findByIdAndDelete(inmuebleId);
        res.json(inmueble);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;
