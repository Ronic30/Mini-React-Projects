import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return(
      <div className="card">
        <div className="top">
            <img src={props.logo} alt="" />
            <button><Bookmark /></button>
        </div>
        <div className="center">
            <p className='title'>{props.companyName}</p>
            <p className='role'>{props.companyRole}</p>
          <div className='cat'>
            <p className='cat1'>{props.companyCat1}</p>
            <p className='cat1'>{props.companyCat2}</p>
          </div>
        </div>
        <div className="bottom">
          <div className='sal-loc'>
            <p className='sal'>{props.companyPay}</p>
            <p className='loc'>{props.companyLoc}</p>
          </div>
          <button className='cat1'>Apply Now</button>
        </div>
      </div>
  )
}

export default Card