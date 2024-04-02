import { useState, useEffect, useRef } from "react";
import "../Histogram/Histogram.css";
import arrowLeft from "../Histogram/icons-стрелка-влево.svg";
import arrowRight from "../Histogram/icons-стрелка-вправо.svg";

export default function Histogram() {
    const [loading, setLoading] = useState(true);
    const [totalDocuments, setTotalDocuments] = useState([]);
    const [riskFactors, setRiskFactors] = useState([]);
    const sliderRef = useRef(null);

    useEffect(() => {
        if (localStorage.getItem('totalDocuments') !== null) {
            setLoading(true);
            setTotalDocuments(JSON.parse(localStorage.getItem('totalDocuments')));
        }
    }, [setTotalDocuments]);

    useEffect(() => {
        if (localStorage.getItem('riskFactors') !== null) {
            setLoading(true);
            setRiskFactors(JSON.parse(localStorage.getItem('riskFactors')));
        } else {
            setRiskFactors();
        }
    }, [setRiskFactors]);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 100;
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 100;
        }
    };

    return (
        <>
            <div className="Histogram">
                <img className="arrow" src={arrowLeft} onClick={scrollLeft} />

                <div className="table">
                    <div className="example">
                        <div>Период</div>
                        <div>Всего</div>
                        <div>Риски</div>
                    </div>
                    {!loading ? (<div className="loader"></div>) :
                        (<div className="slider_container" ref={sliderRef}>
                            {totalDocuments.map((element, id) => (
                                <div className='slider' key={id} >
                                    <div className="slider_text">{element.date.substring(0, 10).split("-").reverse().join(".")}</div>
                                    <div className="slider_text">{element.value}</div>
                                    <div className="slider_text">{riskFactors[id].value}</div>
                                </div>
                            ))}
                        </div>)}
                    {/* <div className="slider_container" ref={sliderRef}>
                        {totalDocuments.map((element, id) => (
                            <div className='slider' key={id} >
                                <div className="slider_text">{element.date.substring(0, 10).split("-").reverse().join(".")}</div>
                                <div className="slider_text">{element.value}</div>
                                <div className="slider_text">{riskFactors[id].value}</div>
                            </div>
                        ))}
                    </div> */}
                </div>

                <img className="arrow" src={arrowRight} onClick={scrollRight} />

            </div>

        </>
    )
}