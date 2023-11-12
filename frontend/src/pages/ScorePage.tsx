import React from 'react';
import ScoreBar from '../components/Score';
import Table from '../components/Table';
import '../styles/ScorePage.css'
import {useLocation} from 'react-router-dom';
const getScoreMessage = (score: number) => {
 
  
  if (score <= 50) {

      return (
        <>
          <h2>Your Portfolio Evaluation: </h2>
          <p>
            Your current portfolio is categorized as <strong>unsustainable</strong>. After analyzing your Environmental (E), Social (S), and Governance (G) preferences, it appears that your investment portfolio does not fully align with your personal values. This is perfectly fine! Understanding your portfolio score is the initial stride towards making sustainable investment decisions.
          </p>
          <p>
            <em>Feel free to explore our resource pages for valuable insights or consider some of the suggested investments below to enhance your overall score.</em>
          </p>
        </>
      );
    } else if (score <= 75) {
      return (
        <>
          <h2>Your Portfolio Evaluation:</h2>
          <p>
            Your existing portfolio is categorized as <strong>somewhat sustainable</strong>. Upon evaluating your Environmental (E), Social (S), and Governance (G) preferences, it appears that there is a moderate alignment with your personal values. Acknowledging your portfolio score is a positive step towards fostering sustainable investment practices.
          </p>
          <p>
            <em>Explore our resource pages for valuable insights, or consider the suggested investments below to further improve your overall score.</em>
          </p>
        </>
      );
    } else {
      return (
        <>
          <h2>Congratulations!</h2>
          <p>
            Your current portfolio is recognized as <strong>sustainable</strong>. Your Environmental (E), Social (S), and Governance (G) preferences align well with your personal values, reflecting a commendable commitment to sustainable investment.
          </p>
          <p>
            <em>Celebrate this achievement, and continue to explore our resource pages for ongoing guidance. Additionally, you may find interest in the suggested investments below to enhance and diversify your sustainable portfolio.</em>
          </p>
        </>
      );
    }
  };
  

const ScorePage: React.FC = () => {
    const location = useLocation() 
    const payload = location.state.Payload;
    const score = Math.floor( payload.portfolio_score);
    return (
      <div className="score-page">
        <div className="left-panel">
          <div className="card">
            <ScoreBar score={score} />
          </div>
          <div className="table-container">
            <Table />
          </div>
          <p className='classification'>
          {getScoreMessage(score)}       
          </p>    
        </div>
      </div>
    );
  };
  
  export default ScorePage;