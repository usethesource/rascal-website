import React from 'react';
import { getHighlighter, setCDN } from 'shiki';
import Children from 'react-children-utilities';

class Rascal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { code: 'NOCODE' };
    }

    componentDidMount() {
        const kids = `module demo::basic::Hello

        import IO;
        
        void hello() {
            println("Hello world, this is my first Rascal program");
        }`;
        // const kids = this.props.children[0];
        console.log('KIDS', kids);


        // setCDN("https://unpkg.com/shiki/"); 
        setCDN("/shiki/");
        const promise = getHighlighter({
            theme: 'monokai',
            langs: [
                {
                    id: 'rascal',
                    scopeName: 'source.rascal',
                    path: './util/rascal.tmLanguage.json'
                }
            ]
        });

        console.log('Promise created')
        
        promise.then(hiliter => {
            console.log('THEN')
            const colored = hiliter.codeToHtml(
                kids,
                { lang: 'rascal' }
            );

            console.log(colored);
         
            this.setState({
                code: colored
            });
        })
    }

    render() {
        return <div dangerouslySetInnerHTML={{ __html: this.state.code }}/>
    }
}

export default Rascal;