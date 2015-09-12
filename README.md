
npm install -g yo grunt-cli bower
npm install -g generator-ionic


yo ionic poi-gulp
npm install && bower install
grunt serve
grunt platform:add:android
grunt emulate:android --consolelogs
grunt run:android


grunt compress
grunt build:android --debug
