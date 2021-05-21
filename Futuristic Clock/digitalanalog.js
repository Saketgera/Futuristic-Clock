/**
 * @param canvas The canvas to use
 */
		var canvas = document.getElementById("canvas");
		//full screen resolution
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		//center of screen
		centerX=canvas.height/2;
		centerY=canvas.width/2;

		var ctx = canvas.getContext("2d");

  //function to change degree into Radian for analog clock
  function degInRad(degree){
	var factor = Math.PI/180;
	return degree*factor;
		}

		function renderTime(){
			var now = new Date();
			var today = now.toDateString();
			var hrs = now.getHours();
			var min = now.getMinutes();
			var sec = now.getSeconds();
			var mil = now.getMilliseconds();
			var smoothsec = sec+(mil/1000);
      var smoothmin = min+(smoothsec/60);
		var	hours = hrs < 10 ? "0" + hrs : hrs;
    var minu = min < 10 ? "0" + min : min;
    var secd = sec < 10 ? "0" + sec : sec;
			 var time=hours+":"+minu+":"+secd;
			// setting Background
			gradient = ctx.createRadialGradient(centerY, centerX, 5,centerY, centerX, 300);
			gradient.addColorStop(1, "black");
			ctx.fillStyle = gradient;
			ctx.fillStyle = 'rgba(00 ,00 , 00, 1)';
			ctx.fillRect(0, 0,canvas.width*2, window.innerHeight*2);

			//setting Hours
			ctx.strokeStyle = '#077b8a';
			ctx.lineWidth = 15;
			ctx.shadowBlur= 10;
	  	ctx.shadowColor = '#077b8a';
			ctx.beginPath();
			ctx.arc(centerY,centerX,100, degInRad(270), degInRad((hrs*30)-90));
			ctx.stroke();

			//setting Minutes
			ctx.strokeStyle = '#F2EA02';
			ctx.lineWidth = 15;
			ctx.shadowBlur= 10;
			ctx.shadowColor = '#F2EA02';
			ctx.beginPath();
			ctx.arc(centerY,centerX,80, degInRad(270), degInRad((smoothmin*6)-90));
			ctx.stroke();

			//Setting Seconds
			ctx.strokeStyle = '#DC143C';
			ctx.lineWidth = 15;
			ctx.shadowColor = '#DC143C';
			ctx.shadowBlur= 10;
			ctx.beginPath();
			ctx.arc(centerY,centerX,60, degInRad(270), degInRad((smoothsec*6)-90));
			ctx.stroke();

			//setting Time
			ctx.font = "25px Comic Sans";
			ctx.textAlign="center";
			ctx.fillStyle = '#FDFBF9';
			ctx.shadowColor = '#000';
			ctx.fillText(time, centerY, centerX);

			ctx.font = "14px Georgia ";
			ctx.textAlign="center";
			ctx.fillStyle = '#FDFBF9';
			ctx.shadowColor = '#000';
			ctx.fillText('Made by Saket Gera', centerY, centerX+300);
			}

			setInterval( renderTime, 40 );
