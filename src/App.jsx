import { useState } from 'react';
import './App.css'
import Modal from './Modal';
import Title from './Title';
import Blog from './Blog';

function App() {

  // 데이터 바인딩
  let post = '강남제육맛집';

  const [title, setTitle] = useState([
    '남자코트추천',
    '강남우동맛집',
    '자바스터디'
  ]);

  const [createDate, setCreateDate] = useState([
    '2025-5-1',
    '2025-6-1',
    '2025-7-1',
  ]);

  const [details, setDetails] = useState([
    '심플한 디자인의 코트로 가을에 잘 어울림',
    '강남 우동의 찐 맛집! 먹어보진 않았음',
    '자바 스터디는 말 만하고 못함',
  ])

  // 좋아요 누름 숫자를 보관할 스테이트
  const [like, setLike] = useState([0,0,0]);

  // 좋아요 처리 함수
  // function addLikes(num){
  //   setLike(like[num]+1)
  // }

  function changeTitle(){
    const newTitle = [... title];
    newTitle[0] = '여자코드추천';
    setTitle(newTitle);
  }

  // 모달페이지가 보이게/안보이게 작업하기위한 스테이트
  const [modal, setModal] = useState(false);

  // 직전 선택한 인덱스를 저장할 스테이트
  const [currentIndex, setCurrentIndex] = useState(null);
  

  return (
    <div className='App'>
      {/* Title이 위치할 곳 */}
      <Title />

      {/* <h4 style={{color: 'red', fontSize: '20px'}}>{post}</h4> */}

      {/* Blog 위치할 곳 */}
      <Blog 
        title={title}
        createDate={createDate}
        details={details}
        setTitle={setTitle}
        setCreateDate={setCreateDate}
        like={like}
        setLike={setLike}
        setDetails={setDetails}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        modal={modal}
        setModal={setModal}
      />

      {/* 상세페이지 나타날 곳 */}
      {modal ? <Modal 
          color="lightblue" 
          title={title} 
          currentIndex={currentIndex} 
          createDate={createDate}
          details={details}
          />: null }
    </div>
  )
}

export default App
