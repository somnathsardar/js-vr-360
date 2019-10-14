AFRAME.registerComponent('rotation-reader', {
  tick: function () {
    /* console.log("x: " + this.el.object3D.rotation._x);
    console.log("y: " + this.el.object3D.rotation._y);
    console.log("z: "+ this.el.object3D.rotation._y + "\n\n"); */
    var radians = this.el.object3D.rotation._y;
    degree = (radians * (180 / Math.PI) * -1);
    $('#arrow').css("transform","rotate("+degree+"deg)");
  }
});

function displayText1(){
  $('a-plane.text').remove();
  $('a-entity#textIndicator').remove();
  $('#vastuContent').empty();
  var textArray = [
    "<a-plane position='0.3 1.9 -5' depth='0' height='0.7' width='4.6' visible='false' class='text' id='text1'>"+
      "<a-text color='#000' value='Pressed steel sheet 1.6 mm thick with double rebate.' width='4' position='-1.8 0 1' rotation='0 0 0'></a-text>"+
    "</a-plane>",

    "<a-plane position='5 1.6 -1.5' depth='0' height='0.3' width='3' visible='false' class='text' id='text2' rotation='0 -90 0'>"+
      "<a-text color='#000' value='Sal Wood Sliding Door' width='4' position='-1.3 0 0' rotation='0 0 0'></a-text>"+
    "</a-plane>",

    "<a-plane position='4 1.9 -4' depth='0' height='0.7' width='3' visible='false' class='text' id='text3' rotation='0 0 0'>"+
      "<a-text color='#000' value='Bricked Wall with putty and paited' width='4' position='-1.3 0 0' rotation='0 0 0'></a-text>"+
    "</a-plane>",

    "<a-plane position='-5 1.9 0.5' depth='0' height='0.5' width='4.2' visible='false' class='text' id='text4' rotation='0 90 0'>"+
      "<a-text color='#000' value='Powder coated aluminium windows with openable & fix combination Electrical - Modular Switches' width='4' position='-2 0 0' rotation='0 0 0'></a-text>"+
    "</a-plane>",
  ]
  var pointsArray = [
    "<a-entity id='textIndicator' onmouseenter="+'mouseEnterShowText('+"'text1'"+") onmouseleave="+'mouseLeaveHideText('+"'text1'"+") position='0 1.5 -1.7' rotation='0 0 0' scale='1 1 1' geometry='primitive: circle; radius: 0.03' material='color: black'></a-entity>",
    "<a-entity id='textIndicator' onmouseenter="+'mouseEnterShowText('+"'text2'"+") onmouseleave="+'mouseLeaveHideText('+"'text2'"+") position='2 1.5 -0.5' rotation='0 -90 0' scale='1 1 1' geometry='primitive: circle; radius: 0.03' material='color: black'></a-entity>",
    "<a-entity id='textIndicator' onmouseenter="+'mouseEnterShowText('+"'text3'"+") onmouseleave="+'mouseLeaveHideText('+"'text3'"+") position='1.5 1.5 -1.5' rotation='0 0 0' scale='1 1 1' geometry='primitive: circle; radius: 0.03' material='color: black'></a-entity>",
    "<a-entity id='textIndicator' onmouseenter="+'mouseEnterShowText('+"'text4'"+") onmouseleave="+'mouseLeaveHideText('+"'text4'"+") position='-2 1.55 0.3' rotation='0 90 0' scale='1 1 1' geometry='primitive: circle; radius: 0.03' material='color: black'></a-entity>",
  ]
  var vastuText =
    "<h1>General Vastu Tips for Bed Room</h1>"+
    "<ul>"+
      "<li>Avoid a round or oval-shaped bed.</li>"+
      "<li>Bed should always have a head rest. Never keep a window open behind your head when sleeping.</li>"+
      "<li>Avoid a round ceiling above the bed.</li>"+
      "<li>Never sleep under an overhead beam.</li>"+
      "<li>Refrain from hanging photographs of deceased ancestors on the wall.</li>"+
      "<li>Do not place the temple in the bedroom.</li>"+
      "<li>Remove all broken or chipped items.</li>"+
      "<li>Keep door of attached toilet shut when not in use.</li>"+
      "<li>Mop the floor at least once a week with sea salt added to the water as it removes negative energy.</li>"+
    "</ul>"
  for(var i=0; i<pointsArray.length; i++){
    $('a-scene').append(pointsArray[i]);
  }
  for(var i=0; i<textArray.length; i++){
    $('a-scene').append(textArray[i]);
  }
  $('#vastuContent').append(vastuText);
}

function displayText2(){
  $('a-plane.text').remove();
  $('a-entity#textIndicator').remove();
  $('#vastuContent').empty();
  var textArray = [
    "<a-plane position='0 1.8 -4' depth='0' height='0.5' width='2.5' visible='false' class='text' id='text1' rotation='0 -20 0'>"+
      "<a-text color='#000' value='Mala plaster with Wall putty' width='4' position='-1 0 0' rotation='0 0 0'></a-text>"+
    "</a-plane>",

    "<a-plane position='-4 1.7 -2' depth='0' height='0.5' width='2.5' visible='false' class='text' id='text2' rotation='0 90 0'>"+
      "<a-text color='#000' value='Wooden Staircase' width='4' position='-1 0 0' rotation='0 0 0'></a-text>"+
    "</a-plane>"
  ]
  var pointsArray = [
    "<a-entity id='textIndicator' onmouseenter="+'mouseEnterShowText('+"'text1'"+") onmouseleave="+'mouseLeaveHideText('+"'text1'"+") position='0 1.5 -2' rotation='0 0 0' scale='1 1 1' geometry='primitive: circle; radius: 0.03' material='color: black'></a-entity>",

    "<a-entity id='textIndicator' onmouseenter="+'mouseEnterShowText('+"'text2'"+") onmouseleave="+'mouseLeaveHideText('+"'text2'"+") position='-1.7 1.4 -0.5' rotation='0 45 0' scale='1 1 1' geometry='primitive: circle; radius: 0.03' material='color: black'></a-entity>",
  ]
  var vastuText =
    "<h1>General Vastu Tips for Living Room</h1>"+
    "<ul>"+
      "<li>Never have beam or girder running along the ceiling of the living room, since sitting under one causes mental turmoil and stress.</li>"+
      "<li>Colour the walls with either white or light green as this promotes a sense of togetherness and affection between the guests and occupants. Do not use dark shades except on the east wall.</li>"+
      "<li>Use light curtains on the windows and doors in the north-east wall and heavy curtains for the south-west wall of the living room.</li>"+
      "<li>Keep some space in the north-east corner of the living room. Ensure that it remains clean and clutter-free. Enhance the tranquility of this space by placing a few potted plants.</li>"+
      "<li>Place television and air conditioner in the south-east or the agni corner.</li>"+
    "</ul>"
  for(var i=0; i<pointsArray.length; i++){
    $('a-scene').append(pointsArray[i]);
  }
  for(var i=0; i<textArray.length; i++){
    $('a-scene').append(textArray[i]);
  }
  $('#vastuContent').append(vastuText);
}

function displayText3(){
  $('a-plane.text').remove();
  $('a-entity#textIndicator').remove();
  $('#vastuContent').empty();
  var textArray = [
    "<a-plane position='4 1.7 -4' depth='0' height='0.5' width='2.5' visible='false' class='text' id='text1' rotation='0 0 0'>"+
      "<a-text color='#000' value='Waterproof wooden door' width='4' position='-1 0 0' rotation='0 0 0'></a-text>"+
    "</a-plane>",

    "<a-plane position='-6 1.7 -1' depth='0' height='0.5' width='4' visible='false' class='text' id='text2' rotation='0 90 0'>"+
      "<a-text color='#000' value='Lounge Etched Dark Grey 30cm x 60cm Wall Tile' width='4' position='-1.9 0 0' rotation='0 0 0'></a-text>"+
    "</a-plane>"
  ]
  var pointsArray = [
    "<a-entity id='textIndicator' onmouseenter="+'mouseEnterShowText('+"'text1'"+") onmouseleave="+'mouseLeaveHideText('+"'text1'"+") position='1.7 1.4 -2' rotation='0 0 0' scale='1 1 1' geometry='primitive: circle; radius: 0.05' material='color: black'></a-entity>",
    "<a-entity id='textIndicator' onmouseenter="+'mouseEnterShowText('+"'text2'"+") onmouseleave="+'mouseLeaveHideText('+"'text2'"+") position='-3 1.4 0' rotation='0 90 0' scale='1 1 1' geometry='primitive: circle; radius: 0.05' material='color: black'></a-entity>",
  ]
  var vastuText =
    "<h1>General Vastu Tips for Attached Bathroom and Toilet</h1>"+
    "<ul>"+
      "<li>Water closet (commode) should preferentially be aligned to North-South axis in toilet.</li>"+
      "<li>Build toilets in West or North-West side of north of a room depending upon whether toilet is with bedroom or separate.</li>"+
      "<li>Toilets can also be constructed on South side.</li>"+
      "<li>Place commode inside the toilet in West, South or North-West side of West.</li>"+
      "<li>Fit the pot, in toilet, in such a way that while using the commode the person never faces East or West.</li>"+
      "<li>You can have entrance door of the toilet on East or North wall.</li>"+
      "<li>The flooring of toilet should slope towards East or North so that water drains from these sides.</li>"+
      "<li>Avoid toilets in center, North-East or South-West corners of home.</li>"+
    "</ul>"
  for(var i=0; i<pointsArray.length; i++){
    $('a-scene').append(pointsArray[i]);
  }
  for(var i=0; i<textArray.length; i++){
    $('a-scene').append(textArray[i]);
  }
  $('#vastuContent').append(vastuText);
}



function mouseEnterShowText(id){
  id ="#"+id
  $(id).attr('visible',true);
  //$('#textIndicator').attr('visible',false);
};

function mouseLeaveHideText(id){
  id ="#"+id
  $(id).attr('visible',false);
  //$('#textIndicator').attr('visible',true);
};

function openNav(){
  $('#myNavbar').css('width','100%');
  $('#vastuContent').css('display', 'block');
}

function closeNav(){
  $('#myNavbar').css('width','0%');
  $('#vastuContent').css('display', 'none');
}

$(document).ready(function(){
  var zoom = 1.0;
  var selectedImage = $('#selectBackgroundImage').val();
  $('#background').attr('src',selectedImage);

  if(selectedImage == "images/img/bed_room.jpg"){
    displayText1();
  }
  else if(selectedImage == "images/img/sitting_room.jpg"){
    displayText2();
  }
  else if(selectedImage == "images/img/bathroom.jpg"){
    displayText3();
  }

  $('#selectBackgroundImage').on('change',function(){
    var optionValue = $(this).val();
    $('#background').attr("src",optionValue);

    if(optionValue == "images/img/bed_room.jpg"){
      displayText1();
    }
    else if(optionValue == "images/img/sitting_room.jpg"){
      displayText2();
    }
    else if(optionValue == "images/img/bathroom.jpg"){
      displayText3();
    }
  });

  $('#zoom_in').on('click',function(){
    if(zoom < 2.1){
      zoom = zoom + 0.1;
    }
    var camera = $('#camera');
    camera.attr('zoom',zoom);
  });

  $('#zoom_out').on('click',function(){
    if(zoom > 0.6){
      zoom = zoom - 0.1;
    }
    var camera = $('#camera');
    camera.attr('zoom',zoom);
  });
  
  $('#reset_camera_zoom').on('click',function(){
    zoom = 1.0;
    var camera = $('#camera');
    camera.attr('zoom',zoom);
  });
});