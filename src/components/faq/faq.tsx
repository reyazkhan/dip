import React, { useState } from 'react'
import style from './faq.module.css'
import Arror from '../../assets/Arror'
import { faqlist } from '../../constant'
import LeftArrorTranc from '../../assets/LeftArrorTranc'
import RightArrorWhite from '../../assets/RightArrorWhite'
import RightArrorTranc from '../../assets/RightArrorTranc'
import LeftArrorWhite from '../../assets/LeftArrorWhite'
 

const FAQ = () => {
    const [selectedFaq, setSelectedFaq] = useState('')
    const [count, setCount] = useState<number>(1)
    
    return (
        <article className={style.article}>
                {count === 1 && faqlist.map((res) => {
                return(
                    <>
                    <div className={style.faqlist}
                        onClick={() => {
                        setSelectedFaq(res?.item)
                        }} 
                    >
                        <span className={style.faqTitle}>{res?.item}</span>  
                        { selectedFaq !== res?.item &&
                        <Arror  className={style.arrorDirection0} />
                        }
                    </div>

                        {selectedFaq === res?.item &&(
                            <div className={style.faqDetails}>
                                <div className={style.detailsText}>
                                    <span className={style.item_direction}>{res?.details}</span>
                                </div>
                                <Arror  className={style.arrorDirection} onClick={()=>  setSelectedFaq('res?.item')}/>
                            </div>

                        )}
                         { res?.item !== 'Specialization' &&
                            <hr className={style.border}/>
                         }

                    </>
                )
                })}
                {count === 2 && faqlist.map((res) => {
                return(
                    <>
                    <div className={style.faqlist}
                        onClick={() => {
                        setSelectedFaq(res?.item)
                        }} 
                    >
                        <span className={style.faqTitle}>{res?.item + '1'}</span>  
                        { selectedFaq !== res?.item &&
                        <Arror  className={style.arrorDirection0} />
                        }
                    </div>

                        {selectedFaq === res?.item &&(
                            <div className={style.faqDetails}>
                                <div className={style.detailsText}>
                                    <span className={style.item_direction}>{res?.details}</span>
                                </div>
                                <Arror  className={style.arrorDirection}/>
                            </div>

                        )}
                         {  res?.item !== 'Specialization' &&
                            <hr className={style.border}/>
                         }

                    </>
                )
                })}

                <div className={style.arrors}>
                    {count === 1 ? (
                        <>
                        <LeftArrorTranc  onClick={() => setCount(1)}/>
                        <RightArrorWhite onClick={() => setCount(2)}/>
                        </>
                    ):count === 2 &&(
                        <>
                        <LeftArrorWhite  onClick={() => setCount(1)}/>
                        <RightArrorTranc  onClick={() => setCount(2)}/>
                        </>
                    )}
                </div>
           
        </article>


    )
}

export default FAQ