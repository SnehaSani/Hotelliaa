import React, { useState } from 'react';
import Star from './Star';

const RatingStars = () => {
    const [gradeIndex, setGradeIndex] = useState();
    const GRADES = ['Very Poor', 'Poor', 'Fair', 'Good', 'Very Good'];
    const activeStar = {
        fill: '#e7e95a'
    };

    const changeGradeIndex = ( index ) => {
        setGradeIndex(index);
    }

    return (
        <div className="container">
            
            <h1><b>Review Section</b></h1>
            <h2>Please leave a review</h2>
            <div className="stars">
                {
                    GRADES.map((grade, index) => (
                        <Star 
                            index={index+1} 
                            key={grade} 
                            changeGradeIndex={changeGradeIndex}
                            style={ gradeIndex > index ? activeStar : {}}
                        />
                    ))
                }
            </div>
            <h3 className="result">{ GRADES[gradeIndex] ? GRADES[gradeIndex] : ''}</h3>
            <h3 className="result1">{GRADES[gradeIndex]?'Thanks for your valuable review' : '' }</h3>

        </div>
    );
}

export default RatingStars;