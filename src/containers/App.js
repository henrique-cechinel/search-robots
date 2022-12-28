import React, {useEffect} from 'react'
import { connect } from 'react-redux' 
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import { setSearchField, requestRobots } from '../actions'
import './App.css'

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

function App(props) {
  const { searchField, onSearchChange, robots, isPending } = props;

  useEffect(() => {
    props.onRequestRobots();
  },[])

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
  })
  
  if (isPending) { return <h1 className='tc f1'>Loading</h1> }

  return (
    <div className='tc'>
      <h1 className='f1'>Search Robots</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);