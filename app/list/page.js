import { connectDB } from "@/util/database.js";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item, i) => {
        return (
          <a href={"detail/" + result[i]._id}>
            <div className="list-item" key={i}>
              <h4>{result[i].title}</h4>
              <p>1월 1일</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
