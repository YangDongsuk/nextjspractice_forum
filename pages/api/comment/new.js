import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);

  if (요청.method === "POST") {
    if (요청.body === "") {
      return 응답.status(500).json({ message: "내용을 입력해주세요." });
    }
    try {
      let data = 요청.query;
      data.author = session.user.email;
      data.parent = new ObjectId(data.parent);
      data.content = 요청.body;
      let db = (await connectDB).db("forum");
      let result = db.collection("comment").insertOne(data);
      return 응답.status(200).json("입력되었습니다.");
    } catch (error) {
      console.log(error);
    }
  }

  //   console.log(요청.body);
  //   console.log(요청.query);
}
