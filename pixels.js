    /* Created by: Mohamad Issa
	  Write code to 
	  convert specified data of pixels 
           into an image.
	*/
	
	var canvWith = 400;
    var canvHeight = 200;
	var file ="pixelsFile.txt";// data file
 
 
    function start() {
          myDrawArea.start();
		  readTextFile(file); 
    }
 
    var  myDrawArea = {
	
      canvas: document.createElement("canvas"),
      start: function() {
					this.canvas.width = canvWith;
					this.canvas.height = canvHeight;
					this.context = this.canvas.getContext("2d");
					document.body.insertBefore(this.canvas, document.body.childNodes[0]);
				},
	  
      clear: function() {
                          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);   
		               }
  
      };

       // fill one pixel.
   function point(x, y){ 
   var ctx  = myDrawArea.context
	             ctx.fillStyle = "red";
                 ctx.fillRect(x,y,1,1);
				 console.log("     x"+x+"   y"+ y);
    };
		 
//Read  a file		 
	function readTextFile(filepath){
		var pixels=[];
		var posx=0;
	
    $.get("pixelsFile.txt", function(data, status){
		//Read the data line by line
           pixels = data.split("\n");
		   // draw email
	      for (var i =0;i < data.split("\n").length;i++ ){
	          posx = pixels[i].search("x"); 
			 // extracted points x and y 
		      point( pixels[i].slice(0,posx),pixels[i].slice(posx+1, pixels[i].length));
		  }
    });
};
