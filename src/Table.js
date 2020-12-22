import React from 'react';
import "./Table.css";

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    _createHeader() {
        return this.props.columns.map(c => <th>{c}</th>);
    }

    _createBody() {
        return this.props.lines.map(line => {
            return <tr>
                {Object.values(line).map(col => <td>{col}</td>)}
            </tr>;
        });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        {this._createHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this._createBody()}
                </tbody>
            </table>
        );
    }
}

export default Table;