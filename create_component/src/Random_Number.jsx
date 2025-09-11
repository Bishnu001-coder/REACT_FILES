export default function Random(){
    let randomnum=Math.random()*100;
    return <h1 style = {{'color':'blue'}}>this a random number {Math.round(randomnum)}</h1>
}