import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";
export default async function handler(요청, 응답) {
  if (요청.method === "GET") {
    try {
      let db = (await connectDB).db("forum");
      let result = await db
        .collection("comment")
        .find({ parent: new ObjectId(요청.query.parent) })
        .toArray();
      //   console.log(요청.query.parent);

      //   console.log(datas);

      응답.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}
