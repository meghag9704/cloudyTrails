  let audio, heart;
  let audioValues, heartValues;
  let audioStartTime;
  let audioEndTime;
  let heartStartTime = [];
  let heartEndTime = [];



function preload() {
  audio = loadTable('audio.csv', 'csv', 'header');
  heart = loadTable('heart.csv', 'csv', 'header');
}

function setup() {
  print(audio.getRowCount() + ' total rows in Audio Table');
  print(audio.getColumnCount() + ' total columns in Audio Table');
  print(heart.getRowCount() + 'total rows in Heart Table');
  print(heart.getColumnCount() + ' total columns in Heart Table');
  createCanvas(windowWidth, windowHeight);
  square(width/2, height/2, 100);
  background(0);
  frameRate(60);
  // noStroke();

  audioValues = audio.getColumn('value');
  audioStartTime = getTime(audio.getColumn('Start Date'), audio.getColumn('Start Time'));
  audioEndTime = getTime(audio.getColumn('End Date'), audio.getColumn('End Time'));

}



function draw() { 
  // background(0);
  fill(255);
  strokeWeight(80);
  // if(mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > height/2 - 50 && mouseY < height/2 +50) {
    fill(0); 
    stroke(0);
    line(mouseX, mouseY, pmouseX, pmouseY);
  // }
  // line(mouseX, mouseY, pmouseX, pmouseY);
  noStroke();
  fill(255, 150);
  for(let i = 0; i < audioValues.length; i++) { 
    circle(random(0, width), random(0, height), audioValues[i]/10);
  }

}


// print("End Time" + audioEndTime.length);
// let a = audioStartTime[4];
// let b = audioEndTime[4];
// print("start: " + a + ", end:" + b);
// print(b-a);
  // print(audioStartTime);
  // print(audioStartTime.length);
    // let check = new Date("10/16/2022");
    // // print(check);
    // for(let i = 0; i < audio.getRowCount(); i ++) { 
    //     let dA = new Date(audio.get(i, 'Creation Date'));
    //     for(let j = 0; j < heart.getRowCount(); j++) { 
    //         let dH = new Date(heart.get(j, 'CREATION DATE'));
    //         if(dA == dH) { 
    //             print('hello');
    //         }
    //     }
    // }

    function getTime(dateList, timeList) { 
      let subList = [];
      for(let i = 0; i <dateList.length; i++){
        let a = dateList[i] + " " + timeList[i]
        let s = new Date(a);
        append(subList, s);
      }
      return subList;
    }