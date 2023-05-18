"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((item, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={"detail/" + result[i]._id}>
              <h4>{result[i].title}</h4>
            </Link>
            <Link href={"/edit/" + result[i]._id} className="list-btn">
              ✏️
            </Link>
            <button
              onClick={(e) => {
                console.log("삭제");
                console.log(result[i]._id);
                fetch("/api/post/delete/", {
                  method: "POST",
                  body: result[i]._id,
                })
                  .then((r) => {
                    if (r.status == 200) {
                      return r.json();
                    } else {
                      //서버가 에러코드전송시 실행할코드
                      console.log("에러");
                    }
                  })
                  .then((result) => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                    console.log(result);
                    //성공시 실행할코드
                  })
                  .catch((error) => {
                    //인터넷문제 등으로 실패시 실행할코드
                    console.log(error);
                  });
              }}
            >
              🗑️
            </button>
            {/* <button
              onClick={(e) => {
                fetch("/api/deleteByQs?_id=" + result[i]._id, {
                  method: "get",
                });
              }}
            >
              query string
            </button>
            <button
              onClick={(e) => {
                fetch("/api/deleteByUrlParameter/" + result[i]._id, {
                  method: "get",
                });
              }}
            >
              user pr
            </button> */}
            {/* <DetailLink /> */}

            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
