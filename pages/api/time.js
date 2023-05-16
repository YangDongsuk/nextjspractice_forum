export default function handler(요청, 응답) {
  var currentdate = new Date();
  console.log(currentdate);
  var datetime =
    "Last Sync: " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  console.log(datetime);
  return 응답.status(200).json(datetime);
}
