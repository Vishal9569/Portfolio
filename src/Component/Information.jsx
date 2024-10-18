import React from 'react'

function Information() {
    return (
        <>
            <div className="ProjectSection" id='Project'>
                <h1>Project</h1>
                <div className="Project1">
                    <a href='https://foodapp-inky-xi.vercel.app/' target='blank'>
                        <img src="ProjectImg.webp" alt="" />
                    </a>
                    <div className="ProjectText">
                        <h2>Delicious Food</h2>
                        <p>The Food Ordering App is designed to streamline the dining experience by allowing users to easily browse local restaurants, customize their orders, and make secure payments for delivery or pickup.</p>
                        <div className="divHashtag">
                            <p>html</p>
                            <p>css</p>
                            <p>js</p>
                            <p>reactjs</p>
                        </div>
                    </div>
                </div>

                <div className="Project1">
                    <div className="ProjectText">
                        <h2>Car Parking Management System:</h2>
                        <p>This C++ project efficiently manages vehicle parking, allowing users to park cars, view details, check expenses, and remove vehicles with a user-friendly interface...</p>
                        <div className="divHashtag">
                            <p>C++</p>
                            <p>OOPs</p>
                            <p>DSA</p>
                        </div>
                    </div>
                    <a href='https://github.com/Vishal9569/Parking-booking-system/tree/main' target='blank'>
                        <img src="Project2.png" alt="" />
                    </a>
                </div>

                <div className="Project1">
                    <a href='https://github.com/Vishal9569/todo-app' target='blank'>
                        <img src="Project3.png" alt="" />
                    </a>
                    <div className="ProjectText">
                        <h2>To-Do List Application</h2>
                        <p>Created a React-based to-do app with features for adding, editing, and removing tasks. Implemented a clean, responsive UI for an enhanced user experience.</p>
                        <div className="divHashtag">
                            <p>html</p>
                            <p>css</p>
                            <p>js</p>
                            <p>reactjs</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Information;


