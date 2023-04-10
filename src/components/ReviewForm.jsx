import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,

}
 from 'react-icons/bs'

import "./ReviewForm.css"



const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className='revierw-form'>
      <div className="form-control score-container">
        <label htmlFor="" className="radio-container">
          <input type="radio" 
          value="unsatisfied" 
          name="review"
          required 
          checked={data.review==="unsatisfied"}
          onChange={(e)=>updateFieldHandler("review",e.target.value)} />
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>
        <label htmlFor="" className='radio-container'>
          <input type="radio" value="neutral" name="review" required 
          checked={data.review==="neutral"}
          onChange={(e)=>updateFieldHandler("review",e.target.value)}/>
          <BsFillEmojiNeutralFill/>
          <p>Poderia ser melhor</p>
        </label>
        <label htmlFor="" className='radio-container'>
          <input type="radio" value="satisfied" name="review" required
          checked={data.review==="satisfied"}
          onChange={(e)=>updateFieldHandler("review",e.target.value)}  />
          <BsFillEmojiSmileFill/>
          <p>Satisfeito</p>
        </label>
        <label htmlFor="" className='radio-container'>
          <input type="radio" value="very_satisfied" name="review" required 
          checked={data.review==="very_satisfied"}
          onChange={(e)=>updateFieldHandler("review",e.target.value)} />
          <BsFillEmojiHeartEyesFill/>
          <p> Muito Satisfeito</p>
        </label>
      
      </div>
      <div className="form-control">
          <label htmlFor="coment">Comentário</label>
          <textarea 
          name="comment" 
          id="comment" 
          cols="30"
           rows="10" 
           placeholder='Conte como foi sua expêriencia com o produto...'
           value={data.comment||"" }
        onChange={(e)=>updateFieldHandler("comment",e.target.value)}
           >
            
           </textarea>
        </div>

    </div>
  )
}

export default ReviewForm