import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";
export default async function Edit(props) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(result);

  return (
    <div className="p-20">
      <h4>수정 페이지</h4>
      <form action="/api/post/update" method="POST">
        <input name="title" defaultValue={result.title}></input>
        <input name="content" defaultValue={result.content}></input>
        <input type="hidden" name="hide" value={props.params.id}></input>

        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
