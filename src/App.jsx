import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import './App.css';
import './EventCard.css';

function App() {
  const [initialQuestions, setInitialQuestions] = useState([
    "Start",
    (
      <div >
        <p>Question 1</p>
        <p>What flower is this?</p>
        <img src="data:image/jpeg;base64,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" alt="" 
        style={{ maxWidth: '100%', maxHeight: '100%' }}/>
      </div>
    ),
    (
      <div >
        <p>Question 2</p>
        What is the process by which plants make their own food using sunlight?
        </div>
    
    ),
    (
      <div >
        <p>Question 3</p>
        Which gas do plants absorb from the atmosphere during photosynthesis?
        </div>
    
    ),
    (
      <div >
        <p>Question 4</p>
        What part of a plant absorbs water and minerals from the soil?
        </div>
    
    ),
    (
      <div >
        <p>Question 5</p>
        Which plant is known as the "King of Spices" and is commonly used to flavor dishes?
        </div>
    
    ),
    (
      <div >
        <p>Question 6</p>
        What is the primary function of leaves in a plant?
        </div>
    
    ),
    (
      <div >
        <p>Question 7</p>
        Which famous plant is known for its soothing gel used to treat sunburns and skin irritations?
        </div>
    
    ),
    (
      <div >
        <p>Question 8</p>
        What is the reproductive part of a flower that contains the pollen?
        </div>
    
    ),
    (
      <div >
        <p>Question 9</p>
        Which plant is often associated with Halloween, known for its orange color and carving tradition?
        </div>
    
    ),
    (
      <div >
        <p>Question 10</p>
        What is the tallest tree species on Earth, found in California and Oregon, USA?
        </div>
    
    ),
    // ... (rest of your questions)
  ]);

  const [initialAnswers, setInitialAnswers] = useState([
    "Click the buttons to begin",
    "Answer 1: Lily!",
    "Answer 2: Photosynthesis",
    "Answer 3: Carbondioxide CO2",
    "Answer 4: Roots",
    "Answer 5: BlackPepper",
    "Answer 6: Photosynthesis (for producing food)",
    "Answer 7: AloeVera",
    "Answer 8: Stamen",
    "Answer 9: Pumpkin",
    "Answer 10: CoastRedwood",
    // ... (rest of your answers)
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);

  const [shuffledIndices, setShuffledIndices] = useState([]);
  const [shuffleClicked, setShuffleClicked] = useState(false); // Track if shuffle button has been clicked

  useEffect(() => {
    if (shuffleClicked) {
      // If shuffle button has been clicked, shuffle the indices for questions
      const indices = [...initialQuestions.keys()].slice(1); // Exclude the "Start" card
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      console.log(indices);
      // Create new arrays for shuffled questions and answers based on the shuffled indices
      let newQuestions = [initialQuestions[0], ...indices.map(index => initialQuestions[index])];
      let newAnswers = [initialAnswers[0], ...indices.map(index => initialAnswers[index])];
      console.log(newQuestions);
      console.log(newAnswers);
      // Update the state variables for shuffled questions and answers
      setInitialQuestions(newQuestions);
      setInitialAnswers(newAnswers);

      // Reset the shuffleClicked state to false
    setShuffleClicked(false);
  
      // Update the shuffled indices
      //setShuffledIndices([0, ...indices]); // Add "Start" card back to the beginning
  
      // Reset the current card index
      setCurrentCardIndex(0);
    } else {
      // If shuffle button has not been clicked, use the original order
      setShuffledIndices([...initialQuestions.keys()]);
    }
  }, [shuffleClicked]);
  
  const nextCard = () => {
    setShowAnswer(false);
    setUserAnswer('');
    
    if (currentCardIndex < initialQuestions.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevCard = () => {
    setShowAnswer(false);
    setUserAnswer('');
    
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => prevIndex - 1);
    }
  };

  const toggleCardView = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
    setUserAnswer('');
    setIsAnswerCorrect(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!showAnswer) {
      const correctAnswer = initialAnswers[currentCardIndex].replace(/^Answer \d+: /, '');
      const userAnswerLower = userAnswer.toLowerCase().replace(/[ ,.!?:;"']/g, '');
      const correctAnswerParts = correctAnswer
        .toLowerCase()
        .split(/[ ,.!?:;"']/);
      
        const isAnswerValid = () => {
          const correctAnswerProcessed = correctAnswerParts.map(part =>
            part.toLowerCase().replace(/s$/, '') // Remove 's' from the end of each part
          );
        
          return correctAnswerProcessed.some(part =>
            userAnswerLower.includes(part)
          );
        };
        
  
      if (isAnswerValid()) {
        setIsAnswerCorrect(true);
        setCurrentStreak((prevStreak) => prevStreak + 1);
        if (currentStreak + 1 > highestStreak) {
          setHighestStreak(currentStreak + 1);
        }
      } else {
        setIsAnswerCorrect(false);
        setCurrentStreak(0);
      }
    }
  };

  const handleShuffleClick = () => {
    setShuffleClicked(true); // Set shuffleClicked to true when shuffle button is clicked
    if (currentStreak > highestStreak) {
      setHighestStreak(currentStreak + 1);
    }
    setCurrentStreak(0);
  };

  return (
    <div className="App">
      <h1 style={{ color: 'black' }}>Flashcards</h1>
      <h2 style={{ color: 'black' }}>Quiz about plants</h2>
      <div className="total-questions">
        Total Questions: {initialQuestions.length - 1}
      </div>
      <div className="streak-container">
        <span style={{ marginRight: '10px' }}>Current Streak: {currentStreak}</span>
        <span>Highest Streak: {highestStreak}</span>
      </div>

      <div className="card-container">
        <EventCard
          question={initialQuestions[shuffledIndices[currentCardIndex]]}
          answer={initialAnswers[shuffledIndices[currentCardIndex]]}
          showAnswer={showAnswer}
          onCardClick={toggleCardView}
        />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            style={{ borderColor: isAnswerCorrect === true ? 'green' : isAnswerCorrect === false ? 'red' : '' }}
          />
          <button type="submit">Submit</button>
        </form>

        <div className="button-container">
          <button onClick={prevCard} style={{ visibility: currentCardIndex === 0 ? 'hidden' : 'visible' }}>
            &larr;
          </button>
          <button onClick={nextCard} style={{ visibility: currentCardIndex === initialQuestions.length - 1 ? 'hidden' : 'visible' }}>
            &rarr;
          </button>
          <button onClick={handleShuffleClick}>Shuffle</button>
        </div>
      </div>
    </div>
  );
}

export default App;
