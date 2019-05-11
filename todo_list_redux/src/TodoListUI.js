import React from 'react'
import { Input, Button, List } from 'antd';

// Prefer to use a function as a stateless component in order to improve 
// performance
const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <div>
        <Input 
          value={props.inputValue} 
          placeholder='Todo Info' 
          style={{width: '300px', marginRight: '10px'}}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleButtonClick}>
          Submit
        </Button>
      </div>
      <List
        style={{marginTop: '10px', width: '300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => {
            console.log(index)
            props.handleItemDelete(index)
          }}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

// UI Component
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{marginTop: '10px', marginLeft: '10px'}}>
//         <div>
//           <Input 
//             value={this.props.inputValue} 
//             placeholder='Todo Info' 
//             style={{width: '300px', marginRight: '10px'}}
//             onChange={this.props.handleInputChange}
//           />
//           <Button type="primary" onClick={this.props.handleButtonClick}>
//             Submit
//           </Button>
//         </div>
//         <List
//           style={{marginTop: '10px', width: '300px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item 
//               onClick={(index) => {
//                 this.props.handleItemDelete(index)
//               }}
//             >
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI;