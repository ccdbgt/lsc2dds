const { join } = require('path');
const { readdirSync, readFileSync, writeFile } = require('fs');
const [pref, dir, next] = process.argv.slice(2);
if(!dir) return console.log('Please fill Dir args');
if(!pref) return console.log('Please fill Prefix args');
if(pref == '-d'){
const match = RegExp('.lsc', 'g');
const files = readdirSync(dir);
files
  .filter(file => file.match(match))
  .forEach(file => {
    try {
        data = readFileSync(dir+'/'+file);
        arrByte = Uint8Array.from(data);
        const filePath = join(dir, file.replace('.lsc','.dds'));
        writeFile(filePath, Buffer.from(q(arrByte)), 'binary',  (err)=> {
          if (err) {
              console.log("There was an error writing the image")
          }
          else {
              console.log("Written File :" + filePath)
          }
      });
    } catch(e) {
    	console.log(e)
    }
  });
}else if(pref == '-s'){
if(!next) return console.log('Please fill After named args');
    try {
        data = readFileSync(dir);
        arrByte = Uint8Array.from(data);
			const lastIndex=dir.lastIndexOf("/");
			const requiredPath=dir.slice(0,lastIndex+1);
			if(next.indexOf('.dds') != '-1') {

        const filePath = join(requiredPath, next);

        writeFile(filePath, Buffer.from(q(arrByte)), 'binary',  (err)=> {
          if (err) {
              console.log("There was an error writing the image")
          }
          else {
              console.log("Written File :" + filePath)
          }
      });
			}else{

        const filePath = join(requiredPath, next+'.dds');
        writeFile(filePath, Buffer.from(q(arrByte)), 'binary',  (err)=> {
          if (err) {
              console.log("There was an error writing the image")
          }
          else {
              console.log("Written File :" + filePath)
          }
      });
			}
    } catch(e) {
    	console.log(e)
    }
}else{
	console.log("Invalid Prefix Command")
}
function q(_0x4f15a5) {
    var _0x2b5575 = _0x4f15a5['length'],
        _0x216a06;
    for (i = 0x0; i < _0x2b5575; i++) {
        _0x216a06 = _0x4f15a5[i], temp = (_0x216a06 & 0x7) << 0x5, _0x216a06 >>= 0x3, _0x216a06 |= temp, _0x216a06 ^= 0xff, _0x4f15a5[i] = _0x216a06;
    }
    return _0x4f15a5;
}
