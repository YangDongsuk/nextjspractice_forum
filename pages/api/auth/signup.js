import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
  if (요청.method === "POST") {
    if (
      요청.body.name == "" ||
      요청.body.email == "" ||
      요청.body.password == ""
    ) {
      응답.status(500).json("빈칸 다 채워라");
    }
    let db = (await connectDB).db("forum");
    let result = await db.collection("user_cred").find().toArray();
    let isPresent = result.some((item) => item.email == 요청.body.email);
    if (isPresent) return 응답.status(500).json({ message: "중복 아이디" });

    const hash = await bcrypt.hash(요청.body.password, 10);
    요청.body.password = hash;
    await db.collection("user_cred").insertOne(요청.body);
    응답.status(200).json("성공");
  }
}
