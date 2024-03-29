
import './App.css';
import { Component } from 'react';
import { Header } from './Header';
import { Section } from './Section';
import { Article } from './Article';
import { Footer } from './Footer';
import {DescInput} from './Desclnput';



class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      title: '야구게임 방식',
      rules:[
        '[1]. 830 - 들어맞는 숫자가 아예 없으므로 아웃. 이때부터 0, 3, 8이 후보에서 빠지므로 남는 숫자는 1, 2, 4, 5, 6, 7, 9다.',
        '[2]. 659 - 6이 있지만 위치가 다르므로 1볼. 게임 상으로는 어떤 숫자가 맞는지 모르기 때문에 가장 난감하다.',
        '[3]. 264 - 2가 있고 위치가 맞으며, 6이 있지만 위치가 다르므로 1스트라이크 1볼.',
        '[4]. 126 - 숫자는 전부 맞지만 위치는 6만 맞고 나머지 둘은 다르므로 1스트라이크 2볼.',
        '[5]. 216 - 전부 맞으므로 승리.'
      
    ]
  }
}

  render(){
    return(
      <div className = "App">
          <Header intro ={this.state.title}></Header>
          <Section ></Section>
          <Article></Article>
          <Footer desc = {this.state.rules}></Footer>
          <DescInput send = {(text) =>{
            this.state.rules.push(text);
            this.setState(
              {
                rules: this.state.rules
              }
            );
          }}></DescInput>
         
      </div>
    );
  }
}


export default App;
