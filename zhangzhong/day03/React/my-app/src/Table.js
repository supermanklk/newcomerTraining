import React ,{Component} from  'react'

const FunTableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
        </thead>
    )
}
const FunTableBody = () => {
    return (
        <tbody>
        <tr>
            <td>Charlie</td>
            <td>Janitor</td>
        </tr>
        <tr>
            <td>Mac</td>
            <td>Bouncer</td>
        </tr>
        <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
        </tr>
        <tr>
            <td>Dennis</td>
            <td>Bartender</td>
        </tr>
        </tbody>
    )

}

class Table extends Component{
    render(){
        return(
            <table>
                <FunTableHeader />
                <FunTableBody/>
            </table>

        )
    }
}

export default Table