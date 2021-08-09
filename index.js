
var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'ejs');

app.use('/', require('./routes/main'));

var port = 3000;
app.listen(port, function() {
    var dir = './uploadedFiles';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    
    console.log('server on ! http://localhost:' + port);
})



// var express = require('express'),
// http = require('http'),
// path = require('path');

// var bodyParser = require('body-parser'),
// static = require('serve-static'),
// cookieParser = require('cookie-parser'),
// expressSession = require('express-session');

// var multer = require('multer'),
// fs = require('fs'),
// cors = require('cors');

// var app = express();
// var router = express.Router();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use('/public', static(path.join(__dirname, 'public')));
// app.use('/uploads', static(path.join(__dirname, 'uploads')));

// app.use(cookieParser());
// app.use(expressSession({
// secret: 'my key',
// resave: true,
// saveUninitialized: true
// }));

// app.use(cors()); //ajax 요청시 CORS(다중서버접속) 지원

// var storage = multer.diskStorage({
// destination: function (req, file, callback){
//     callback(null, 'uploads/')
// },
// filename: function (req, file, callback){
//     callback(null, file.originalname + '-' + Date.now())
// }
// });

// var upload = multer({
// storage: storage,
// limits: {
//     files: 10, //파일개수제한 10개
//     fileSize: 1024 * 1024 * 1024 //파일크기제한 1GB
// }
// });

// router.route('/process/photo').post(upload.array('photo', 1), function(req, res){
// console.log('/process/photo 호출됨');

// try{
//     var files = req.files;
    
//     console.dir('#-----업로드된 첫번째 파일 정보-----#')
//     console.dir(req.files[0]);
//     console.dir('#------#')
    
//     var originalname = '', filename = '', mimetype = '', size = 0;
    
//     if(Array.isArray(files)){
//         console.log("배열 파일 갯수: %d", files.length);
        
//         for(var i=0; i<files.length; i++){
//             originalname = files[i].originalname;
//             filename = files[i].filename;
//             mimetype = files[i].mimetype;
//             size = files[i].size;
//         }
//     }
    
//     console.log("현재 파일 정보: " + originalname + ', ' + filename + ', ' + mimetype + ', ' + size);
    
//     res.writeHead('200', {
//         'Content-Type': 'text/html;charset=utf8'
//     });
//     res.write('<h1>업로드 성공</h1>');
//     res.write('<hr />');
//     res.write('<p>원본 파일이름: ' + originalname + '-> 저장 파일이름: ' + filename + '</p>');
//     res.write('<p>MIMETYPE: ' + mimetype + '</p>');
//     res.write('<p>SIZE: ' + size + '</p>');
//     res.end();
// } catch(err) {
//     console.dir(err.stack);
// }
// });

// app.use('/', router);

// http.createServer(app).listen(3000, function () {
// console.log('Express 서버가 3000번 포트에서 시작');
// })
