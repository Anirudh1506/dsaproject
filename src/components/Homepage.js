import React, { useState, useEffect } from 'react';
import './Homepage.css';

const Homepage = () => {
    const [progress, setProgress] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const storedProgress = sessionStorage.getItem('progress');
        if (storedProgress !== null) {
            setProgress(parseInt(storedProgress));
        }
    }, []);

    const handleCheckboxChange = () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const totalCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        const newProgress = (totalCheckboxes / checkboxes.length) * 100;
        setProgress(newProgress);
        // Store progress in local storage
        localStorage.setItem('progress', newProgress.toString());
    };

    const redirectq1 = () => {
        window.open('https://leetcode.com/problems/two-sum');
    };
    // Define other redirect functions similarly for other questions...

    const filterQuestions = (question) => {
        return question.toLowerCase().includes(searchTerm.toLowerCase());
    };

    return (
        <div className="main-container">
            <div className="progress">
                <h1>Progress Bar</h1>
                <div
                    style={{
                        width: '800px',
                        height: '20px',
                        backgroundColor: 'lightgray',
                        marginTop: '10px',
                        borderRadius: '20px'
                    }}
                >
                    <div
                        style={{
                            width: `${progress}%`,
                            height: '100%',
                            backgroundColor: 'blue',
                            borderRadius: '20px'
                        }}
                    ></div>
                </div>
                <input 
                    type='text' 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search questions..."
                />
            </div>

            <div className="level-1">
                <h1>Level 1</h1>
                <div className="topic">
                    <h1>Arrays</h1>
                        <div className="cards">
                        {filterQuestions("Two Sum") && (
                            <div className="card">
                                Two Sum 
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'150px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("Median of Two Sorted Arrays") && (
                            <div className="card">
                                Median of Two Sorted Arrays
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'20px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("Container with Most Water") && (
                            <div className="card">
                                Container with Most Water 
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'35px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("Three Sum") && (
                            <div className="card">
                                Three Sum 
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'135px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="level-2">
                <h1>Level 2</h1>
                <div className="topic">
                    <h1>Searching and Sorting</h1>
                    <div className="cards">
                        {filterQuestions("3SUm") && (
                            <div className="card">
                                3Sum
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'150px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("Sort Colors") && (
                            <div className="card">
                                Sort Colors
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'20px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("Merge sorted array") && (
                            <div className="card">
                                Merge sorted array 
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'35px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("Sort list") && (
                            <div className="card">
                                Sort list
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'135px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="level-3">
                <h1>Level 3</h1>
                <div className="topic">
                    <h1>Queues and Stacks</h1>
                    <div className="cards">
                        {filterQuestions("Implement Stack using Queues") && (
                            <div className="card">
                                Implement Stack using Queues
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'150px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("Implement Queue using Stacks") && (
                            <div className="card">
                                Implement Queue using Stacks
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'20px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("Sliding Window Maximum") && (
                            <div className="card">
                                	Sliding Window Maximum
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'35px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("First Unique Character in a String") && (
                            <div className="card">
                               	First Unique Character in a String
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'135px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="level-4">
                <h1>Level 4</h1>
                <div className="topic">
                    <h1>Trees</h1>
                    <div className="cards">
                        {filterQuestions("Binary Tree Inorder Traversal") && (
                            <div className="card">
                                Binary Tree Inorder Traversal
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'150px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("Same tree") && (
                            <div className="card">
                                Same tree
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'20px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("LevelOrder traversal") && (
                            <div className="card">
                                LevelOrder traversal
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'35px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("Max Deptg") && (
                            <div className="card">
                                Max Depth
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'135px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="level-5">
                <h1>Level 5</h1>
                <div className="topic">
                    <h1>Dynamic Programming</h1>
                    <div className="cards">
                        {filterQuestions("Longest Palindromic Substring") && (
                            <div className="card">
                                Longest Palindromic Substring 
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'150px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("Longest Palindromic Subsequence") && (
                            <div className="card">
                                Longest Palindromic Subsequence
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'20px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("1/0 Knapsack") && (
                            <div className="card">
                                1/0 Knapsack
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'35px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                        {filterQuestions("Subset Sum") && (
                            <div className="card">
                                Subset Sum
                                <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked)} />
                                <button onClick={redirectq1} style={{color:'white',backgroundColor:'black', borderRadius:'20px', fontFamily:'Roboto', fontWeight:'bold', marginLeft:'135px', cursor:'pointer', padding:'2px'}}>Go to the Question</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Add other levels and topics similarly */}
        </div>
    );
};

export default Homepage;
