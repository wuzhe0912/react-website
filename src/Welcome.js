import React from 'react'

class Welcome extends React.Component {
  render() {
    // const toDoList = ['Learn React', 'Learn Redux']
    const isLogin = true
    return (
      <div>
        <h1> Hello, Pitt </h1>
        {/* <ul>
          {
            toDoList.map(item =>
              <li>{item}</li>
            )
          }
        </ul> */}
        { isLogin ? <p>已經登錄</p> : <p>請登錄</p> }
      </div>
    )
  }
}

export default Welcome