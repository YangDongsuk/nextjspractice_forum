import { connectDB } from "@/util/database.js";

export default async function handler(요청, 응답) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  console.log(123);
  return 응답.status(200).json(result);
}
