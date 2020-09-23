import React from 'react';

const HotelDetails = (props) => {
    const {title, feature, details, rating, price, image} = props.data;
    console.log(props.data);

    const style = {
        marginBottom: '30px',
         border :'1px solid grey',
         padding:'5px',
         backgroundColor: 'grey',
    }
    return (
        <div>
            <div style={style} >
            <div className="row">
                <div className="col-5">
                    <div>
                        <img src={image} height="150" width="200"  alt="" />
                    </div>
                </div>
                <div className="col-7">
                    <b>{title}</b> <br/>
                    <small  >{feature}</small> <br/>
                    <small  >{details}</small> <br/>
                    <span>
                        {/* <img src={star} height="10" alt="" />&nbsp; */}
                        <small>{rating}</small> 
                    </span> <br/>
                    <span><b>${price}/</b></span><span >night</span>
                    <br/>
                    <button class="bg-warning" style={{width:'60px', padding:'3px 3px'}}>Details</button>
                  </div>
            </div>
            </div>
        </div>
    );
};

export default HotelDetails;