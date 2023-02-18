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
import moment from "moment";

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

  const [mostDay, setMostDay] = useState("");
  const [mostDayNo, setMostDayNo] = useState(0);

  const [dataEmoji, setDataEmoji] = useState({
    labels: ["sdhvbsd", "dsvsdv", "dscvsd"],
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

  const [dataDay, setDataDay] = useState({
    labels: ["dayName", "sdvds"],
    datasets: [
      {
        data: [2, 3],
        backgroundColor: generateColors(7),
      },
    ],
  });

  const optionsDay: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const timeBarOptions: any = {
    indexAxis: "y",
  
      tooltips: {
        enabled: false
      },
      responsive: true,
      legend: {
         display: false,
         position: 'bottom',
         fullWidth: true,
         labels: {
           boxWidth: 10,
           padding: 50
         }
      },
      scales: {
         yAxes: [{
           barPercentage: 0.75,
           gridLines: {
             display: true,
             drawTicks: true,
             drawOnChartArea: false
           },
           ticks: {
             fontColor: '#555759',
             fontFamily: 'Lato',
             fontSize: 11
           }
            
         }],
         xAxes: [{
             gridLines: {
               display: true,
               drawTicks: false,
               tickMarkLength: 5,
               drawBorder: false
             },
           ticks: {
             padding: 5,
             beginAtZero: true,
             fontColor: '#555759',
             fontFamily: 'Lato',
             fontSize: 11,
               
           },
            scaleLabel: {
              display: true,
              padding: 10,
              fontFamily: 'Lato',
              fontColor: '#555759',
              fontSize: 16,
              fontStyle: 700,
              labelString: 'Scale Label'
            },
           
         }]
      }
   };

  const emojiotions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
  };
  function generateColors(n: number) {
    var bgColor: any = [];
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

  function plotSenderGraph(count: {
    [x: string]: number;
    hasOwnProperty?: any;
  }) {
    var senderName: any = [];
    var senderCount: any = [];
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

  function plotEmojiGraph(countEmoji: any) {
    var counter = [];
    var emoji: any = [];
    var count: any = [];
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
    });
  }

  function plotDayGraph(date: any) {
    var day = [0, 0, 0, 0, 0, 0, 0];
    var dayName = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    date.forEach((element: any) => {
      day[
        moment(element, [
          "DD/MM/YYYY",
          "MM/DD/YYYY",
          "DD-MM-YYYY",
          "MM-DD-YYYY",
          "DD.MM.YYYY",
          "MM.DD.YYYY",
          "DD-MM-YY",
          "MM-DD-YY",
          "DD.MM.YY",
          "MM.DD.YY",
          "DD/MM/YY",
          "MM/DD/YY",
        ]).format("e")
      ] += 1;
    });
    var i = day.indexOf(Math.max(...day));
    setMostDayNo(day[i]);
    setMostDay(dayName[i]);
    setDataDay({
      labels: dayName,
      datasets: [
        {
          data: day,
          backgroundColor: generateColors(7),
        },
      ],
    });
    setUploaded(true);

  }

  function onChangeCallback(event: any) {
    var file = event.target.files[0];
    var reader: any = new FileReader();

    reader.onload = function (e: any) {
      var sender = reader.result!.match(/[-\]](\s\w+)+[:]/g);
      var count: any = {};
      var countEmoji: any = {};
      var datetime = reader.result.match(/(\d+[\/.]\d+[\/.]\d+)([^-\]]*)/g);
      var date: any = [];
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
      datetime.forEach(
        (element: {
          match: (arg0: RegExp) => any[];
          search: (arg0: RegExp) => number;
        }) => {
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
        }
      );
      plotSenderGraph(count);
      plotTimeGraph(time);
      plotEmojiGraph(countEmoji);
      plotDayGraph(date);
    };

    reader.readAsText(file);

  }
  return (
    <>
      {uploaded ? (
        <div className="mb-14 m-5">
          <div className="flex flex-col content-center mb-5">
            <div className="time-section">
              <div className="time-text">
                <Bar options={timeBarOptions} data={dataBarTime} />
              </div>
            </div>
          </div>
          <div className="other-container flex  flex-col md:items-end  justify-center space-x-2 md:flex-row">
            <div className="messages-sent text-center	">
              <div className="">
                <Pie  className="p-2" data={senderData} />

                <div className="mt-3 no-sender">{senderText}</div>
                <div>Messages were sent by {senderName}</div>
              </div>
            </div>
            <div className="emoji-sent text-center	">
              <div className="">
                <Bar data={dataEmoji} options={emojiotions} />
              </div>
              <div className="mt-3 no-emoji">{mostEmoji}</div>
              <div>
                Was Sent
                {" " + emojiCount + " Times"}
              </div>
            </div>
            <div className="day text-center	">
              <div className="">
                <Bar data={dataDay} options={optionsDay} />
              </div>
              <div className="mt-3 no-day">{mostDayNo}</div>
              <div>Messages Were Sent On {mostDay}</div>
            </div>
          </div>
        </div>
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
              accept=".txt"
              onChange={onChangeCallback}
            />
            <p>Click here to add your text file</p>
          </label>
        </div>
      )}
    </>
  );
}
