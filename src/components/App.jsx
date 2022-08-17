import { useState } from "react";
import { FeedbackOptions } from 'components/ListButton/FeedbackOptions';
import { Statistics } from 'components/Stats/Statistics';
import { Notification } from 'components/Notification/Notification';

export const App = () => {

  const [ goodState, setGoodState ] = useState(0);
  const [ neutralState, setNeutralState ] = useState(0);
  const [ badState, setBadState ] = useState(0);
  
   const countTotalFeedback = ()=> [goodState + neutralState + badState].reduce((previousValue, currentValue) => previousValue + currentValue + 0);//тотал 
  
  const countPositiveFeedbackPercentage = () => Math.round((goodState / countTotalFeedback() * 100)) + "%"; // процент
 
  const addFeedBackGood = (e) => {
    switch (e.target.textContent) {
      case 'good':
        setGoodState(prevState => prevState + 1);
         break;
        case 'neutral':
        setNeutralState(prevState => prevState + 1);
         break;
          case 'bad':
        setBadState(prevState => prevState + 1);
        break;
     
      default:
        break;
     }
    
  }; 
  
  const strP = [ 'good', 'neutral', 'bad' ];
  
  return (
    <div
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '4vw',color: '#010101' }}
    >     
      <section>
          
          <h1>Please leave feedback</h1>
            {<FeedbackOptions option={strP} onLeaveFeedback={addFeedBackGood} />}
           {countTotalFeedback() === 0? <Notification message="There is no feedback" />:
            <Statistics
                good={goodState}
                neutral={neutralState}
                bad={badState}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
            />}
           </section>
      
    </div>
  );
};
