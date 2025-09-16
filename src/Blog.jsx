function Blog(props){

  // 제목 클릭 시 모달 보이기
  function handleTitle(index){
    // 조건 : 같은 제목을 클릭하면 나타나고 사라짐
    // 다른 제목을 클릭하면 그냥 보여야 하고..
    if(! props.modal) {
      //1. 현재 모달이 닫혀있으면 연다.
      props.setModal(true);
      props.setCurrentIndex(index);
    } else if(props.currentIndex === index){
      // 2. 같은 타이틀이 선택된 경우
      props.setModal(false);
    } else {
      props.setCurrentIndex(index);
    }
  } 

  return(
    <>
      {/* 타이틀 정렬하기 */}
      <button onClick={()=>{
        const sortedTitle = [... props.title].sort()
        props.setTitle(sortedTitle);
      }}>글 정렬하기</button>

      <div className='list'>
        {props.title.map((item, index)=>{
          return(
            <div key={index}>
              <h4 onClick={()=> handleTitle(index)}>
                    {props.title[index]}
                
                <span onClick={(e)=>{
                  {/* 이벤트 버블링 전이 막기 */}
                  e.stopPropagation()
                  const newLikes = [... props.like]
                  newLikes[index]++
                  props.setLike(newLikes)
                  }}>👍
                </span>{props.like[index]} 
              </h4>      
              <p>작성일 : {props.createDate[index]}</p>
            </div>  
          )
        })}           
      </div>
    </>
  )
}

export default Blog;