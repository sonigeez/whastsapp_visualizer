import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  elements,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import React from "react";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export const sfvdfnderData = {
  labels: ["Red", "Orange"],
  datasets: [
    {
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 159, 64, 1)"],
      borderWidth: 1,
    },
  ],
};

export default function Home() {
  const [uploaded, setUploaded] = useState(false);
  const [totalText, setTotalText] = useState(0);
  const [senderText, setSenderText] = useState(0);
  const [senderName, setSenderName] = useState(0);
  const [senderData, setSenderData] = useState({
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  });
  const [dataBarTime, setDataBarTime] = useState({
    labels: ["sdhvbsd", "dsvsdv"],
    datasets: [
      {
        data: [111, 111, 222],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  });

  const [mostEmoji, setMostEmoji] = useState();
  const [emojiCount, setEmojiCount] = useState();

  const [dataEmoji, setDataEmoji] = useState({
    labels: ["sdhvbsd", "dsvsdv","dscvsd"],
    datasets: [
      {
        data: [111, 111, 222],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  });


  const timeBarOptions:any = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };
 
  const emojiotions:any = {
      responsive: true,
      maintainAspectRatio: false,
      scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
    }
  function generateColors(n: number) {
    var bgColor:any = [];
    var r: number, g: number, b: number;
    for (let i = 0; i < Number(n); i += 1) {
      r = Math.floor(Math.random() * 255);
      g = Math.floor(Math.random() * 255);
      b = Math.floor(Math.random() * 255);
      bgColor.push(
        "rgba(" + String(r) + "," + String(g) + "," + String(b) + ", 0.5)"
      );
    }
    return bgColor;
  }

  function plotTimeGraph(time: number[]) {
    var interval = [
      "12AM-1 AM",
      "1AM-2AM",
      "2AM-3AM",
      "3AM-4AM",
      "4AM-5AM",
      "5AM-6AM",
      "6AM-7AM",
      "7AM-8AM",
      "8AM-9AM",
      "9AM-10AM",
      "10AM-11AM",
      "11AM-12PM",
      "12PM-1PM",
      "1PM-2PM",
      "2PM-3PM",
      "3PM-4PM",
      "4PM-5PM",
      "5PM-6PM",
      "6PM-7PM",
      "7PM-8PM",
      "8PM-9PM",
      "9PM-10PM",
      "10PM-11PM",
      "11PM-12AM",
    ];
    var i = time.indexOf(Math.max(...time));
    setDataBarTime({
      labels: interval,
      datasets: [
        {
          data: time,
          backgroundColor: generateColors(24),
        },
      ],
    });
  }

  function plotSenderGraph(count: { [x: string]: number; hasOwnProperty?: any; }) {
    var senderName:any = [];
    var senderCount:any = [];
    var total = 0;
    for (var key in count) {
      if (count.hasOwnProperty(key)) {
        if (key.match(/http/) == null) {
          senderName.push(key);
          senderCount.push(count[key]);
          total += count[key];
        }
      }
    }
    setTotalText(total);
    var i = senderCount.indexOf(Math.max(...senderCount));
    setSenderText(senderCount[i]);
    setSenderName(senderName[i]);
    setSenderData({
      labels: senderName,
      datasets: [
        {
          label: "",
          data: senderCount,
          backgroundColor: generateColors(senderCount.length),
          hoverOffset: 4,
        },
      ],
    });
  }

  function plotEmojiGraph(countEmoji:any) {
  var counter = [];
  var emoji:any = [];
  var count:any = [];
  for (var key in countEmoji) {
    if (countEmoji.hasOwnProperty(key)) {
      counter.push({ emoji: key, value: countEmoji[key] });
    }
  }
  counter.sort(function (a, b) {
    return b.value - a.value;
  });
  if (counter.length > 5) {
    counter = counter.splice(0, 5);
  }
  counter.forEach((element) => {
    emoji.push(element.emoji);
    count.push(element.value);
  });
  var i = count.indexOf(Math.max(...count));
  setMostEmoji(emoji[i]);
  setEmojiCount(count[i]);
  setDataEmoji({
      labels: emoji,
      datasets: [
        {
          data: count,
          backgroundColor: generateColors(24),
        },
      ],
    })
  // var emojiText:any = document.getElementById("emojiText");
  // emojiText.innerHTML =
  //   '<div class="high">' + emoji[i] + "</div> Was Sent " + count[i] + " Times";
  // var ctx = document.getElementById("emojiChart").getContext("2d");
  // var myChart = new Chart(ctx, {
  //   type: "bar",
  //   data: {
  //     labels: emoji,
  //     datasets: [
  //       {
  //         label: "# of Emoji",
  //         data: count,
  //         backgroundColor: generateColors(emoji.length),
  //       },
  //     ],
  //   },
  //   options: {
  //     responsive: true,
  //     maintainAspectRatio: false,
  //     scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
  //   },
  // });
}

  function onChangeCallback(event: any) {
    var file = event.target.files[0];
    var reader:any = new FileReader();

    reader.onload = function (e:any) {
      var sender = reader.result!.match(/[-\]](\s\w+)+[:]/g);
      var count:any = {};
      var countEmoji:any = {};
      var datetime = reader.result.match(/(\d+[\/.]\d+[\/.]\d+)([^-\]]*)/g);
      var date:any = [];
      var time = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      var emoji = reader.result.match(
        /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu
      );
      sender.forEach(function (element: any, i: string | number) {
        sender[i] = sender[i]
          .replace("- ", "")
          .replace(":", "")
          .replace("]", "");
      });
      sender.forEach((element: string | number) => {
        count[element] = (count[element] || 0) + 1;
      });
      if (emoji !== null) {
        emoji.forEach((element: string | number) => {
          countEmoji[element] = (countEmoji[element] || 0) + 1;
        });
      }
      datetime.forEach((element: { match: (arg0: RegExp) => any[]; search: (arg0: RegExp) => number; }) => {
        try {
          date.push(element.match(/(\d+[\/.]\d+[\/.]\d+)/g)[0]);
          if (element.search(/[aA]/) != -1) {
            time[
              Number(
                element
                  .match(/[-+]?\s\d+:/g)[0]
                  .replace(":", "")
                  .replace(" ", "")
              ) % 12
            ] += 1;
          } else if (element.search(/[pP]/) != -1) {
            time[
              Number(
                element
                  .match(/[-+]?\s\d+:/g)[0]
                  .replace(":", "")
                  .replace(" ", "")
              ) == 12
                ? 12
                : Number(
                    element
                      .match(/[-+]?\s\d+:/g)[0]
                      .replace(":", "")
                      .replace(" ", "")
                  ) + 12
            ] += 1;
          } else {
            time[
              Number(
                element
                  .match(/[-+]?\s\d+:/g)[0]
                  .replace(":", "")
                  .replace(" ", "")
              )
            ] += 1;
          }
        } catch (TypeError) {}
      });
      plotSenderGraph(count);
      plotTimeGraph(time);
      plotEmojiGraph(countEmoji)

    };
    setUploaded(true);

    reader.readAsText(file);
  }
  return (
    <>
      {uploaded ? (
        <>
          <div className="flex flex-col content-center">
            <div className="time-section">
              <div className="time-text">
                <div>425</div>
                <div> Messages Were Sent Between 11PM-12AM</div>
                <Bar options={timeBarOptions} data={dataBarTime} />
              </div>
            </div>
          </div>
          <div className="other-container flex">
            <div className="messages-sent flex flex-col  justify-center text-center	">
              <div className="no-messages ">{totalText}</div>
              <div>Messages Were Sent</div>
              <div className="no-sender">{senderText}</div>
              <div>Messages were sent by {senderName}</div>
              <div className="self-center">
                <Pie className="p-9" data={senderData} />
              </div>
            </div>
            <div className="messages-sent flex flex-col  justify-center text-center	">
              <div className="no-messages ">{totalText}</div>
              <div>Messages Were Sent</div>
              <div className="no-sender">{senderText}</div>
              <div>Messages were sent by {senderName}</div>
              <div className="self-center">
                <Bar  data={dataEmoji} options={emojiotions} />
              </div>
            </div>
          </div>
         
        </>
      ) : (
        <div className="flex flex-col items-center justify-center main h-screen w-screen ">
          <label
            className="flex items-center justify-center text-lg opacity-60  rounded-2xl p-20  dark:text-white cursor-pointer border-2 border-dashed border-gray-400 hover:opacity-80 duration-700"
            htmlFor="txtfile"
          >
            <input
              className="hidden"
              id="txtfile"
              type="file"
              onChange={onChangeCallback}
            />
            <p>Click here to add your image</p>
          </label>
        </div>
      )}
    </>
  );
}
