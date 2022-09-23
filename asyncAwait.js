const datas = [
  { name: "Gaurav", role: "Software Developer" },
  { name: "Gaurav", role: "Software Developer" },
];

function getDatas() {
  console.log("Calling GetDatas");
  setTimeout(() => {
    console.log("Calling getDatas in setTimeout 1s");
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = false;
      if (!error) {
        resolve("Success😍");
      } else {
        reject("Errorrrrrrr...............!");
      }
      console.log("Calling createData 2s");
    }, 2000);
  });
}

// createData({ name: "Akshu", role: "Software Tester" })
//   .then(getDatas)
//   .catch((err) => {
//     console.log(`Something went wrong --- ${err}`);
//   });

async function start() {
  console.log("Calling Start");
  await createData({ name: "Akshu", role: "Software Tester" });
  getDatas();
}

start();
