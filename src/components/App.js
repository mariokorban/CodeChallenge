import React from 'react';
import NavigationBar from './NavigationBar';
import SearchByName from './SearchByName';

class App extends React.Component {

    //component state
    state = {

    }
    //Action when the component mounts
    componentDidMount(){
        // ajax,timers, listeners...
    }
    //Action when the component unmounts
    componentWillUnmount(){
        // clean timers, listeners...
    }
    render(){
    return(
            <div className="App">
            <NavigationBar />
            <SearchByName />
            </div>
    );
};
}

export default App;