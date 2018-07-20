import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {stateSelector as eventSelector} from '../reducers/events'

const Item = ({children}) => ( <td className="item">{children}</td> )

class EventsList extends Component {
   /* static propTypes = {
        currencyRate: PropTypes.array,
        rate: PropTypes.object,
        updateRate: PropTypes.func
    }*/

    render() {

        const { events: { eventsSelect = {}}} = this.props

            return (
                <div>
                <h1>Info events</h1>
                <table>
                    <thead>
                    <tr>
                        <th className="title">Title</th>
                        <th className="title">Location</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        eventsSelect.map(({trcid, title, location: {city, zipcode, adress}}, index) => {
                            return <tr key={index + trcid}>
                                {[title, city + ' ' + zipcode + ' ' + adress].map((item, index) => {
                                    return <Item key={index + item}>{item}</Item>
                                })}

                            </tr>
                        })

                    }
                    </tbody>
                </table>
                </div>
            )
    }
}

export default connect((state) => ({
   events: eventSelector(state)
}))(EventsList)

