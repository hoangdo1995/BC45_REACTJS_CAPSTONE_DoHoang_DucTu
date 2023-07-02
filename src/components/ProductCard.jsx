import React from "react";

const ProductCard = (props) => {

  return <div className="col-3">
                <div style={{margin:10}} className="card">
                    <img src="http://i.pravatar.cc?u=1" alt="..." width='100%'/>
                    <div className="card-body p-0 d-flex flex-column">
                        <h4 className="px-2 my-1">Product 1</h4>
                        <p style={{width:'100%',color:'#CBC9C9',fontSize:14}} className="px-2 my-1">Description: Lorem ipsum dolor sit amet.</p>
                        <div className="d-flex w-100">
                            <div className="w-50">
                                <button className="w-100 border-0 p-2">Buy Now</button>
                            </div>
                            <div className="text-center w-50 p-2">
                                85$
                            </div>
                        </div>
                    </div>
                </div>
            </div>
};

export default ProductCard;
