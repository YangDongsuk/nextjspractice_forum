import { connectDB } from "@/util/database.js";
export default async function handler(요청, 응답) {
  if (요청.method === "POST") {
    if (요청.body.userId === "" || 요청.body.userPw === "") {
      return 응답
        .status(500)
        .json({ message: "아이디 비번을 모두 입력해주세요." });
    }

    try {
      let db = (await connectDB).db("forum");
      let result = await db.collection("sign").find().toArray();
      console.log(result);
      console.log(요청.body.userId);
      let isPresent = result.some((item) => item.userId == 요청.body.userId);
      console.log("iPP" + isPresent);
      if (isPresent) return 응답.status(500).json({ message: "중복 아이디" });

      let insert = db.collection("sign").insertOne(요청.body);
      응답.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
    console.log(요청.body);
  }
}
