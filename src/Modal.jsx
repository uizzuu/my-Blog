// 하나의 컴포넌트(조각)
// Props Drilling
function Modal({color, title, currentIndex, createDate, details}){
  return(
    <div className='modal'
      style={{background: color}}>
        <h4>{title[currentIndex]}</h4>
        <p>{createDate[currentIndex]}</p>
        <p>{details[currentIndex]}</p>
    </div>  
  )
}

export default Modal;