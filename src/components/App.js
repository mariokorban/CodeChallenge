import React from 'react';
import NavigationBar from './NavigationBar';
import SearchPanel from './SearchPanel';
import AddEmployee from './AddEmployee'; 


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
            <SearchPanel />
            <AddEmployee />
        </div>
    );
};
}

export default App;