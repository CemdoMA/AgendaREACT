import React from 'react';
import Student from './components/student';

/**
 * App component
 * @param props
 * @returns {XML}
 */
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                MD2 React app om te oefenen
                <Student
                    name="Berend"
                    age="34"
                    adress="Bloemlaan 32"
                />
                <Student
                    name="Jordi"
                    age="18"
                    adress="Kapasstraat 3198"
                    />
                <Student 
                    name="Cem"
                    age="17"
                    adress="plekstraatlaan 32"
                    />
                <Student 
                    name="Bassapguy"
                    age="14"
                    adress="rokin 324B-4"
                    />
                <Student 
                    name="Wesley"
                    age="18"
                    adress="Mecatoen 232AB"
                    />
            </div>
        );
    }

}

export default App;