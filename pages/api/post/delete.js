import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";
export default async function handler(요청, 응답) {
  if (요청.method === "POST") {
    console.log("info", 요청.body);
    try {
      let db = (await connectDB).db("forum");
      await db.collection("post").deleteOne({ _id: new ObjectId(요청.body) });
      응답.status(200).json({ message: "삭제되었습니다." });
    } catch (error) {
      console.log(error);
    }
  }
}
