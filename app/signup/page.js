export default function Write() {
  return (
    <div className="p-20">
      <h4>회원가입</h4>
      <form action="/api/signup" method="POST">
        <input name="userId" placeholder="아이디"></input>
        <input type="password" name="userPw" placeholder="비번"></input>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
