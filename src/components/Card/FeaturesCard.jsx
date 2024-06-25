function FeaturesCard({ imgurl, heading, para }) {
  return (
    <div className="card">
      <img src={imgurl} alt="" />
      <div className="data">
        <h4>{heading}</h4>
        <p>{para}</p>
      </div>
    </div>
  )
}

export default FeaturesCard