const router = require('express').Router()
const {getCharById} = require ('../controllers/getCharById')
const login = require ('../controllers/login');
const postFav = require ('../controllers/postFav');
const deleteFav = require ('../controllers/deleteFav')
const postUser = require ('../controllers/postUser')




router.get('/login', login)
router.post('/login', postUser)

router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

router.get('/character/:id', getCharById)

module.exports = router;

  



// const {login} = require('../controllers/login')
// const {getCharById} = require('../controllers/getCharById')
// const {postFav, deleteFav} = require ('../controllers/handleFavorites')

// const router = require ('express').Router();

// router.get('/login', login );
// router.get('/character/:id', getCharById);
// router.post('/fav', postFav);
// router.delete("/fav/:id", deleteFav);


// module.exports =  router;
