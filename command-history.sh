git clone https://github.com/ToddJMullen/Learning-TypeScript.git
1035  cd ..
1036  ls
1037  cd books/Learning-TypeScript/
1038  ls
1039  git ignore *.zip
1040  git status
1041  echo "*.zip" >> .gitignore
1042  git status
1043  ls
1044  git status
1045  echo "LearningTypeScript_Code/*" >> .gitignore
1046  git status
1047  npm init
1048  npm install
1049  npm install gulp-typescript --save-dev
1050  sudo npm install typescript -g
1051  npm install jquery --save
1052  sudo npm install bower -g
1053  bower init
1054  bower install jquery
1055  bower install jquery --save
1056  bower install jasmine --save-dev
1057  git status
1058  sudo npm install tsd -g
1059  tsd init
1060  tsd install jquery --save
1061  npm install @types
1062  npm install @types/jquery
1063  tsd install --save @types/jquery
1064  tsd install @types/jquery --save
1065  sudo npm install gulp -g
1066  npm install --save-dev gulp
1067  gulp
1068  gulp jump
1069  npm install --save @types/jquery
1070  npm install gulp-tslint --save-dev
1071  sudo npm install typescript -g
1072  npm install typescript@~2.0.3
1073  npm install tslint@>=5.0.0-dev			<= added =5.0.0-dev file in root
1074  npm instal typescript@2.1.0
1075  npm install typescript@2.1.0
1076  npm install gulp-typescript --save-dev
1077  sudo npm install typescript -g
1078  npm install jquery --save
1079  npm install gulp-tslint --save-dev
1080  gulp
1081  npm install browserify vinyl-transform gulp-uglify gulp-sourcemaps
1082  npm install mocha chai sinon --save-dev
1083  npm install karma karma-mocha karma-chai karma-sinon karma-coverage karma-phantomjs-launcher gulp-karma --save-dev
1084  man history

1085  history
1086  sudo npm install -g browser-sync
1087  gulp browser-sync
1088  npm instal run-sequence
1089  npm install run-sequence
1090  gulp browser-sync
1091  npm install run-sequence --save-dev
1092  gulp browser-sync
1093  npm ls
1094  npm outdated
1095  npm install -g browser-sync
1096  sudo npm install -g browser-sync
1097  npm ls -g
1098  npm ls -g --depth=0
1099  sudo npm uninstall -g browser-sync
1100  npm install browser-sync --save-dev
1101  gulp browser-sync
1102  git staus
1103  git status
1104  git add .
1105  git status
1106  git reset HEAD
1107  git status
1108  echo "temp\ncoverage" >> .gitignore
1109  nano .gitignore
1110  git status
1111  git add .
1112  git status
1113  git reset =*
1114  git status
1115  history
1121  git status
1122  git add .
1123  git status
1124  git commit -m "End of Chapter 2
1125  Nothing seems to be working and I've had to research just about everything mentioned because everything was throwing errors and deprecation wornings.
1126  The typings / tsd / DefinitelyTyped TypeScript library definitions have been changed to use another format that is supposed to be simpler and usable directly via npm. However, it seems that even something as ubiquitous as jQuery seems to be not working correctly or easily.
1127  However, I'm not totally sure what the root cause is of the errors because there are/were practically no *instructions* to _do_ anything and there is no TypeScript source that was cited to by transpiled or tested -- so perhaps that's the origin of some of the errors???
1128  The gulpfile from the book downloads contains a lot of stuff that is never mentioned in addition to changes that were also not mentioned, but I had already found while researching the errors I was seeing.
1129  So far, Chapter two: 1.5 of 5 stars =( "
1130  git push
1131  git config --global push.default simple
1132  git status
1133  git branch
1134  git checkout -b dev
1135  git push
1136  git push -set-upstream origin dev
1137  git push --set-upstream origin dev
1138  git branch --all
1139  git push
1140  git help push
1141  git config --global credential.helper cache
1142  git config --global credential.helper 'cache --timeout=3600'
1143  git push
1144  gulp
1145  gulp lint
1146  gulp tsc
1147  npm install -g gulp-cli
1148  whoami
1149  npm config get prefix
1150  ls -la /usr
1151  cd /usr/local
1152  ls
1153  ls lib
1154  cd ..
1155  cd lib/
1156  ls
1157  cd node_modules/
1158  ls
1159  cd ..
1160  ls -la /node_modules
1161  ls -la node_modules
1162  ls
1163  sudo chown -R todd /usr/lib/node_modules/
1164  sudo chown -R todd /usr/bin
1165  sudo chown -R todd /usr/share/
1166  npm install -g gulp-cli
1167  cd ~/Dev/
1168  ls
1169  cd books/Learning-TypeScript/
1170  sudo npm install -g gulp-cli
1171  cd /usr/bin
1172  ls -l sudo
1173  sudo -i
1174  su -
1175  cd ~
1176  ls
1177  ln -s Dev WebDev
1178  cd WebDev
1179  ls
1180  npm install -g gulp-cli
1181  sudo npm install -g gulp-cli
1182  cd books/Learning-TypeScript/
1183  npm install --save-dev typescript gulp gulp-typescript
1184  gulp
1185  node dist/main.js
1186  nano dist/main.js
1187  gulpnano dist/main.js
1188  gulp && nano dist/main.js
1189  gulp && node dist/main.js
1190  nano dist/main.js
1191  nano dist/greet.js
1192  npm install --save-dev browserify tsify vinyl-source-stream
1193  gulp
1194  gedit dist/main.js
1195  gedit dist/index.html
1196  gksudo gedit /dist/index.html
1197  gulp
1198  node dist/index.html
1199  gulp
1200  gulp build
1201  git status
1202  git log
1203  git add .
1204  git status
1205  git commit -m "Follow along with the tutorial on typescript.org up until / just before they add Watchify, Uglify, & Babel.  Rename their gulpfile to ts-
org_gulpfile.js and make some changes to the original gulpfile.js from the book.  Mainly (all I remember presently) changing the build target to ES6 due to a missing declaration for ?iterator? if targeting ES5.

This gives build warnings of "ts(tsProject) has been deprecated - use .pipe(tsProject(reporter)) instead" but seems like it actually accompliahing something, though I am not sure how to verify any of it just yet, though I thought I'd commit now since I've not looked at it in a few days."
1206  git log
1207  git commit -m "Follow along with the tutorial on typescript.org up until / just before they add Watchify, Uglify, & Babel.  Rename their gulpfile to ts-
org_gulpfile.js and make some changes to the original gulpfile.js from the book.  Mainly (all I remember presently) changing the build target to ES6 due to a missing declaration for ?iterator? if targeting ES5.

This gives build warnings of \"ts(tsProject) has been deprecated - use .pipe(tsProject(reporter)) instead\" but seems like it actually accompliahing something, though I am not sure how to verify any of it just yet, though I thought I'd commit now since I've not looked at it in a few days."
1208  git log
1209  gulp ts-org_gulpfile.js
1210  man gulp
1211  gulp --gulpfile ts-org_gulpfile.js
1212  npm install --save-dev watchify gulp-util
1213  gulp --gulpfile ts-org_gulpfile.js
1214  npm install --save-dev gulp-uglify vinyl-buffer gulp-sourcemaps
1215  gulp --gulpfile ts-org_gulpfile.js
1216  history
