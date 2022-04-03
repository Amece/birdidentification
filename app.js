// Feature Extractor Classification for birds

let mobilenet;
let classifier;
let video;
let label = 'loading model';
let merelButton;
let huismusButton;
let spreeuwButton;
let trainButton;

function modelReady() {
    console.log('model is ready');
    classifier.load('model.json', customModelReady);
}

function customModelReady() {
    console.log('bird model is ready');
    label = 'model ready';
}

function videoReady() {
    console.log('Video is ready!!!');
    classifier.classify(gotResults);
}


function setup() {
    createCanvas(620, 570);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    mobilenet = ml5.featureExtractor('MobileNet', modelReady);
    classifier = mobilenet.classification(video, videoReady);

    // Training Code \\
  //
//     merelButton = createButton('merel');
//     merelButton.mousePressed(function() {
//         classifier.addImage('merel');
//     });

//     huismusButton = createButton('huismus');
//     huismusButton.mousePressed(function() {
//         classifier.addImage('huismus');
//     });

//     spreeuwButton = createButton('spreeuw');
//     spreeuwButton.mousePressed(function() {
//         classifier.addImage('spreeuw');
//     });

//     trainButton = createButton('train');
//     trainButton.mousePressed(function() {
//         classifier.train(whileTraining);
//     });

//     saveButton = createButton('save');
//     saveButton.mousePressed(function() {
//         classifier.save();
//   });

}

function draw() {
    background(0);
    image(video, 0, 0, 620, 540);
    fill(255);
    textSize(16);
    text(label, 10, height - 10);
}

// function whileTraining(loss) {
//   if (loss == null) {
//     console.log('Training Complete');
//     classifier.classify(gotResults);
//   } else {
//     console.log(loss);
//   }
// }

function gotResults(error, result) {
    if (error) {
      console.error(error);
    } else {
      label = result[0].label;
      classifier.classify(gotResults);
    }
  }
