import { connectDB } from "@/util/database.js";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={"detail/" + result[i]._id}>
              <h4>{result[i].title}</h4>
            </Link>
            <Link href={"/edit/" + result[i]._id} className="list-btn">
              ✏️
            </Link>

            {/* <DetailLink /> */}

            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
