import path from 'path';
import express from 'express';
import ejs from 'ejs';
import { fileURLToPath } from 'url';

import indexRouter from './routes/index.js';
import itemsRouter from './routes/items.js';
import itemsCategoryRouter from './routes/items_category.js';
import itemsInfoRouter from './routes/items_info.js';
import testRouter from './routes/test.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('.html', ejs.__express);

app.use('/', indexRouter);
app.use('/test', testRouter);

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
