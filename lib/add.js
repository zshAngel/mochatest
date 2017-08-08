function add(num1,num2) {
  // 实现该函数
  var num1List = num1.split('').reverse();
  var num2List = num2.split('').reverse();
  var max = Math.max(num1List.length,num2List.length);
  var cList = [];
  var flag = 0;
  for(var i=0;i<max;i++){
  	var tmp = (+num1List[i] || 0)+(+num2List[i] || 0)+flag;
  	flag = 0;
  	if(tmp > 9){
  		tmp -= 10;
  		flag = 1;
  	}
  	cList.push(tmp);
  }
  if(flag === 1){
  	cList.push(flag);
  }
  
  return cList.reverse().join('');
}

module.exports = add