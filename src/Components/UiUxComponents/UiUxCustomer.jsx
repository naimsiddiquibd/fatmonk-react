import React from 'react';

const UiUxCustomer = () => {
    return (
        <div className="hero min-h-[700px] bg-monkblack">
            <div className="hero-content max-w-[1220px] flex-col lg:flex-row">
                <img src="/uiuxcustomer.png" className="max-w-[280px] md:max-w-md rounded-lg shadow-2xl" />
                <div>
                    <div className='grid grid-cols-1 px-7'>
                        <div>
                            <h3 className='text-[25px] md:text-[60px] md:leading-[60px] font-poppins text-monkwhite font-bold mt-3 leading-8 text-center md:text-left'>Build a customer experience, not just a product!</h3>
                        </div>
                        <div>
                            <p className='text-[14px] font-poppins font-normal text-monkwhite mt-4 leading-5 md:text-left text-center'>From clicks to trust, crafted with care. We design interfaces that guide users effortlessly, building confidence at every point.</p>
                        </div>
                        <button className='bg-monkred font-poppins font-semibold max-w-xs px-5 md:px-11 md:py-8 py-3 rounded-full text-sm text-monkwhite mt-5 md:mt-5 md:text-[22px] hover:bg-monkdeepred cursor-pointer'>Discuss your Project</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UiUxCustomer;