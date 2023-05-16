import { connectDB } from "@/util/database.js";
export default async function handler(요청, 응답) {
  console.log(123);
  console.log(요청.body.title);
  let db = (await connectDB).db("forum");
  await db
    .collection("post")
    .insertOne({ title: 요청.body.title, content: "nothing input" });
  return 응답.status(200).json(요청.body.title + "이 입력되었습니다.");
}
