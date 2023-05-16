import { connectDB } from "@/util/database.js";
export default async function handler(요청, 응답) {
  if (요청.method === "POST") {
    if (요청.body.title === "" || 요청.body.content === "") {
      return 응답
        .status(500)
        .json({ message: "제목과 내용을 모두 입력해주세요." });
    }
    try {
      let db = (await connectDB).db("forum");
      let result = db.collection("post").insertOne(요청.body);
      응답.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
