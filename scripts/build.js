#!/usr/bin/env node
'use strict';

require('shelljs/global');
set('-e');

mkdir('-p', 'web_deploy')

cp('-R', 'web/*', 'web_deploy/');

exec('npm run swagger bundle --        -o web_deploy/swagger_6.x.json -b spec/6.x/');
exec('npm run swagger bundle -- --yaml -o web_deploy/swagger_6.x.yaml -b spec/6.x/');

exec('npm run swagger bundle --        -o web_deploy/swagger_5.x.json -b spec/5.x/');
exec('npm run swagger bundle -- --yaml -o web_deploy/swagger_5.x.yaml -b spec/5.x/');
