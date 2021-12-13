import { Component } from 'react';

class Footer extends Component{
  render(){
    const list = [];
    for(let i=0; i<this.props.desc.length; i++){
      list.push(          //형태 외워!
                          //arrow함수 사용시 {}=>여러줄
                          //aroow함수 사용시 ()=>한줄 return
      <h5 key ={i} onClick =  
      {(e)/*클릭된 대상*/ =>{ console.dir(e) 
        e.target.style.backgroundColor = 'beige';
        e.target.style.textDecoration = 'underline';
      }}> 
        {this.props.desc[i]}
      </h5>
      );
    }
    return(<footer>{list}</footer>);
  }
}

export { Footer };
