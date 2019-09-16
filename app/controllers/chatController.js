const { check, validationResult } = require('express-validator');

module.exports.initChat = (app, req, res) => {
    const formData = req.body;    
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        res.render("index", { validation: errors.array() })
        return;        
    }

    req.io.emit(
        'msgToClient',
        'Test'
    ) 

    res.render("chat");
};

module.exports.validate = (method) => { 
    switch(method){
        case 'validateNickname': {
            return [
                check('nickname', 'Nome ou apelido é obrigatório').not().isEmpty(),
                check('nickname', 'Nome ou apelido deve conter entre 3 e 15 caracteres').isLength(3, 15),
            ]
        };
    };
};