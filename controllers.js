const { Cliente, Articulo } = require("./models.js");


// ------- COCINEROS

exports.readCocineros = (req, res) => {
    Cocinero.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readCocinero = (req, res) => {
    Cocinero.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteCocinero = (req, res) => {
    Cocinero.findOneAndRemove({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateCocinero = (req, res) => {
    Cocinero.findOneAndUpdate(
        { nombre: req.params.nombre },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos, edad: req.body.edad, especialidad: req.body.especialidad } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createCocinero = (req, res) => {
    const cocinero = new Cocinero({ nombre: req.body.nombre, apellidos: req.body.apellidos, edad: req.body.edad, especialidad: req.body.especialidad });
    cocinero.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}


// ------ PLATOS

exports.readPlatos = (req, res) => {
    Plato.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readPlato = (req, res) => {
    Plato.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deletePlato = (req, res) => {
    Plato.findOneAndRemove({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updatePlato = (req, res) => {
    Plato.findOneAndUpdate(
        { nombre: req.params.nombre },
        { $set: { nombre: req.body.nombre, tipo: req.body.tipo, minutosElaboracion: req.body.minutosElaboracion, precio: req.body.precio } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createPlato = (req, res) => {
    const plato = new Plato({ nombre: req.body.nombre, tipo: req.body.tipo, minutosElaboracion: req.body.minutosElaboracion, precio: req.body.precio  });
    plato.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}