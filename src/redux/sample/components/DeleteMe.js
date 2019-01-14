import React, { Component } from 'react'
import PropTypes from 'prop-types'
import store from '../../store'
import { deleteMe, noSeriouslyDeleteMe } from '../../actions/deleteMeActions'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

class DeleteMe extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: '',
      body: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* dynamically changing elements access the mapped props */
  componentWillMount(){
    this.props.deleteMe();
  }

  /* Forms shouldn't need to access props, only state */
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
      event.preventDefault()
      let post = {title: this.state.title, body: this.state.body}
      this.props.noSeriouslyDeleteMe(post)
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Delete this!!</h1>
          <div>
              <label>DELETE_ME_TOKEN: </label> <p>{this.props.deleteMe}</p>
          </div>
          <div>
              <label>NO_SERIOUSLY_DELETE_ME_TOKEN: </label> <p>{this.props.noSeriouslyDeleteMe}</p>
              <hr/>
              <h4>this will populate on submit of the below form</h4>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Title: </label> 
                    <br/>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Body: </label> 
                    <br/>
                    <textarea name="body" value={this.state.body} onChange={this.handleChange} />
                </div>
                <br/>
                <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </Provider>
    )
  }
}

/* Map state to props to allow dynamic updating from Redux store */
const mapStateToProps = state => ({
  deleteMe: state.deleteMe.deleteMe,
  noSeriouslyDeleteMe: state.deleteMe.noSeriouslyDeleteMe
})

DeleteMe.propTypes = {
    deleteMe: PropTypes.func.isRequired,
    noSeriouslyDeleteMe: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { deleteMe, noSeriouslyDeleteMe })(DeleteMe)