import React from "react"
import { connect } from "react-redux"

import { fetchGrievances } from "../actions/grievancesActions";

connect((store) => {
  return {
    grievances: store.grievances.grievances,
    grievancesFetched: store.grievances.fetched
  };
})
// experimentalDecorators
class Grievances extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGrievances())
  }

  fetchGrievances() {
    this.props.dispatch(fetchGrievances())
  }

  render() {
    const { grievances } = this.props;

    if (!grievances.length) {
      return <button onClick={this.fetchGrievances.bind(this)}>load Grievances</button>
    }

    const mappedGrievances = grievances.map(grievance => <li key={grievance.id}>{grievance.name}</li>)

    return <div>
      <ul>{mappedGrievances}</ul>
    </div>
  }
}

export default Grievances;