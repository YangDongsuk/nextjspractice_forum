"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function Comment({ id }) {
  let [comment, setComment] = useState("");
  let [datas, setDatas] = useState([]);

  useEffect(() => {
    let data = fetch("/api/comment/list?parent=" + id, {
      method: "GET",
    })
      .then((r) => {
        if (r.status == 200) {
          console.log("성공");
          return r.json();
        } else {
          console.log("에러");
          throw new Error("API 요청에 실패했습니다.");
        }
      })
      .then((data) => {
        setDatas(data);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>댓글목록</div>
      {datas.map((data, i) => {
        return (
          <div key={i}>
            <div>{data.authorName}</div>
            <div>{data.content}</div>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new?parent=" + id, {
            method: "POST",
            body: comment,
          }).then((r) => {
            if (r.status == 200) {
              console.log("성공");

              let data = fetch("/api/comment/list?parent=" + id, {
                method: "GET",
              })
                .then((r) => {
                  if (r.status == 200) {
                    console.log("성공");
                    return r.json();
                  } else {
                    console.log("에러");
                    throw new Error("API 요청에 실패했습니다.");
                  }
                })
                .then((data) => {
                  setDatas(data);
                  // console.log(data);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
