      window.addEventListener('load',setCloudPosition,false);
      var smClouds;
	  var mdClouds;
	  var cloudLimit;
	  var wWidth;
	  var hWidth;
      function setCloudPosition(){
        var cl1 = document.getElementById("cloud-layer1");
        var cl2 = document.getElementById("cloud-layer2");
        wHeight = window.innerHeight;
        wWidth = window.innerWidth;
        cloudLimit = Math.floor(wHeight/110);
        console.log(cloudLimit);
		//make medium clouds
        for(var i = 0; i < cloudLimit; i++){
          var ele = document.createElement('div');
          ele.setAttribute("class","cloud mdCloud");
          var top = "top:"+Math.floor(Math.random()*wHeight)+"px";
		  var left = "left:"+Math.floor(Math.random()*wWidth)+"px";
          ele.setAttribute("style",top+";"+left);
          cl1.appendChild(ele);
        }
		//make small clouds
		for(var i = 0; i < cloudLimit*2; i++){
          var ele = document.createElement('div');
          ele.setAttribute("class","cloud smCloud");
          var top = "top:"+Math.floor(Math.random()*wHeight)+"px";
		  var left = "left:"+Math.floor(Math.random()*wWidth)+"px";
          ele.setAttribute("style",top+";"+left);
          cl2.appendChild(ele);
        }
		smClouds = document.getElementsByClassName('smCloud');
		mdClouds = document.getElementsByClassName('mdCloud');
		cloudUpdate();
      }
	  
	function cloudUpdate(){
	  var cloud;
      var left;
	  for(var i = 0; i < cloudLimit; i++){
		cloud = mdClouds[i];
		left = cloud.style.left;
		left = left.replace("px","");
		left = left - .5;
		if (left < -150) {
		  left = wWidth;
		}
		cloud.style.left = left+"px";
	  }
	  for(var i = 0; i < cloudLimit*2; i++){
		cloud = smClouds[i];
		left = cloud.style.left;
		left = left.replace("px","");
		left = left - .25;
		if (left < -75) {
		  left = wWidth;
		}
		cloud.style.left = left+"px";
	  }
	  window.requestAFrame(cloudUpdate);
	}
	  
	// handle multiple browsers for requestAnimationFrame()
    window.requestAFrame = (function () {
      return window.requestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               window.oRequestAnimationFrame ||
               // if all else fails, use setTimeout
               function (callback) {
                  return window.setTimeout(callback, 1000 / 60); // shoot for 60 fps
               };
    })();