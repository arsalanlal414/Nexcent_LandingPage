import Button from "../Buttons/Button"

function Card({imgurl, text}) {
  return (
    <div className="card">
      <img src={imgurl} alt="" />
      <div className="card-text">
        <p>{text}</p>
        <Button text="Read More" cssClass="btn" />
      </div>
    </div>
  )
}

export default Card