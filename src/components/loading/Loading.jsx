import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css'

import Skeleton from 'react-loading-skeleton'
const Loading = ({ type }) => {
    return (
        <>
            {
                type === 'alone' ? (
                    <>
                        <div className='col-md-6'> <Skeleton height={350}></Skeleton>  </div>
                        <div className='col-md-6'>
                            <div className='col-md-6'>
                                <Skeleton height={50}></Skeleton>
                            </div>
                            <div className='col-md-12'>
                                <Skeleton height={20}></Skeleton>
                            </div> <div className='col-md-12'>
                                <Skeleton height={20}></Skeleton>
                            </div>
                            <div className='col-md-12'>
                                <Skeleton height={20}></Skeleton>
                            </div>
                            <div className='col-md-12'>
                                <Skeleton height={20}></Skeleton>
                            </div>
                            <div className='col-md-12'>
                                <Skeleton height={20}></Skeleton>
                            </div>
                        </div>
                    </>
                ) :
                    (
                        <>
                            <div className='col-md-3'>
                                <Skeleton height={350}></Skeleton>
                            </div>
                            <div className='col-md-3'>
                                <Skeleton height={350}></Skeleton>
                            </div>
                            <div className='col-md-3'>
                                <Skeleton height={350}></Skeleton>
                            </div>
                            <div className='col-md-3'>
                                <Skeleton height={350}></Skeleton>
                            </div>

                        </>
                    )
            }

        </>
    );
}

export default Loading;
