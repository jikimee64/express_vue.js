import express from 'express';
import mongoose from 'mongoose';

const app = express();

//DB커넥트 성공 -> 서버 실행
mongoose.connect(`mongodb://localhost:27017/mevn?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false`).then(() => {
    app.listen(3000, () => console.log('listening to port 3000'));
}).catch(err => console.log(err));


