import React,{Component} from 'react';
import styles from './App.less';
import Button from './../components/button/index.tsx';
import crypto from './../utils/crypto';

class App extends React.Component{

    componentDidMount(){


    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div className={styles.container}>
                <Button>Welcome to my world!</Button>
            </div>
        )
    }
}

export default App;