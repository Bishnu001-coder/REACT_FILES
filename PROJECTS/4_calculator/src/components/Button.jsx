import './B.css'
function Button(){
     let Btnname=['c','1','2','+','3','4','-','5','6','*','7','8','/','9','0','=','.']
    return (<div className='buttons'>
     {Btnname.map((btn)=><button className='btn btn-secondary'>{btn}</button>)}
    </div>);
}
export default Button;