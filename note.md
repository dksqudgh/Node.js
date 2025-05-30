### 5월 27일까지 진행 사항
로그인처리 세 가지
  - 1,2 구글 : localstorage사용 -> 세션을 사용하지 않음
  - 3 카카오 : 세션을 사용한 방법(서버측에 캐쉬메모리-추가 라이브러리 사용함.)

- 라우터 처리 
- include활용
  - 장점 , 단점
- 데이터셋은 카카오 서버가 제공하는것을 사용함
- 핸들바스 템플릿 엔진을 사용한다 | 사용하지 않는다


### 5월 28일 이후 진행 사항
 - 관리자 권한으로 제공되는 메뉴 아이템 구현해 보기(인증/인가)
 - 데이터베이스(Realtime database)를 직접 활용해서 데이터셋을 구성해 본다.
 - 장바구니 구현
 - 회원정보 수정하기 구현
 - MYPAGE or DASHBOARD
 - 간단한 게시판 구현

 ### 이미지 업로드 - 클라우디너리
upload preset - express
                dssc6slod


1. 데이터베이스 참조 가져오기
import { getDatabase } from "firebase/database";
const database = getDatabase();

2. 장바구니 담기 - 데이터 쓰기
set(ref(db, 'cart/${uid}/${book.isbn}), book);

3. 장바구니 목록 가져오기 - 데이터 읽기
const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(ref(db, `cart/${uid}`), (snapshot) => {
	let rows=[]
snapshot.forEach(row => {
 rows.push(key: row.key, ...row.val())
})})