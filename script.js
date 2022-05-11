img_array = new Array(
  "./img/1.png",
  "./img/2.png",
  "./img/3.png",
  "./img/4.png",
  "./img/5.png",
);
percent_array = [
    {percent: '10', in: '3.6', cm: '25'},
    {percent: '30', in: '4.2', cm: '35'},
    {percent: '40', in: '4.8', cm: '80'},
    {percent: '80', in: '5.4', cm: '95'},
    {percent: '100', in: '6.1', cm: '100'},
];
i = 0;

function sizeMinus() {
    if (i !== 0) {
        i--;
        document.getElementById("img-block-one").src = img_array[i];
        document.getElementById("center-counter").innerHTML = `${percent_array[i].percent}%`;
        document.getElementById("counter-left-in").innerHTML = `${percent_array[i].in}in`;
        document.getElementById("counter-left-cm").innerHTML = `${percent_array[i].cm}cm`;
}
}

function sizePlus() {
    if (i !== img_array.length - 1) {
        i++;
        document.getElementById("img-block-one").src = img_array[i];
        document.getElementById("center-counter").innerHTML = `${percent_array[i].percent}%`;
        document.getElementById("counter-left-in").innerHTML = `${percent_array[i].in}in`;
        document.getElementById("counter-left-cm").innerHTML = `${percent_array[i].cm}cm`;
    }
  }
  
