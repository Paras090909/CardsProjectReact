
const Card = (props) => {
  return (
    <div className='Container'>
       <div className="upperBody"> 
            <img className='logo' src={props.logo} alt="" />
            <button className="savebtn">save</button>
        </div>
        <div className="companyAndTime">
            <h2 className='companyname'> {props.companyName}</h2>
            <span className='jobposttime'>{props.postingTime}</span>
        </div>
        <div className="jobPost">{props.jobPosition}</div>
        <div className="positionAndLevel">
            <div className='jobtype'>{props.timeType}</div>
            <div className='level'> senior level</div>
        </div>
        <div className="applyBtn">
            <span className='payrate' > {props.payRate}</span>
            <button className='applybtnT'>Apply</button>
        </div>
    </div>
  )
}
export default Card