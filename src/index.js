import React from 'react';
import ReactDOM from 'react-dom/client';
import "./idex.css"
function App()
{
  return (<div className='card'>
  <Image/>
  <Introduction/>
  </div>);
}
function Image()
{
  return <img className='avatar' src='images/vaibhav.jpg' alt='itachi uchiha'/>
}
function Introduction()
{
  return (
    <div>
    <h1 className='h1'> Chinta Phani Rama Vaibhav</h1>
    <body className='body'><strong>I am currently pursuing 4th year in  Electronics and Communication Engineering Branch .I am highly motivated person and would love to learn new tech stacks and bring new thoughts to the work field as per the compaines requirement</strong> </body>
    </div>
  );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);