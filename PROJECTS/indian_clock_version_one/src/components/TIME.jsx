function Time(){
let time=new Date();
return <h3>this is current day {time.toLocaleDateString()}--the current time--{time.toLocaleTimeString()}</h3>

}
export default Time;