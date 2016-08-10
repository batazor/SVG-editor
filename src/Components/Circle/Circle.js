// import React, { Component, PropTypes } from 'react';
// import { DragSource } from 'react-dnd';
//
// const boxSource = {
//   beginDrag(props) {
//     const { id, left, top } = props;
//     return { id, left, top };
//   },
// };
//
// @DragSource('BOX', boxSource, (connect, monitor) => ({
//   connectDragSource: connect.dragSource(),
//   isDragging: monitor.isDragging(),
// }))
// class Circle extends Component { // eslint-disable-line
//
//   render() {
//     const { hideSourceOnDrag, left, top, connectDragSource, isDragging } = this.props; // eslint-disable-line
//
//     if (isDragging && hideSourceOnDrag) {
//       return null;
//     }
//
//     return connectDragSource(
//       <circle
//         cx={this.props.cx}
//         cy={this.props.cy}
//         r={this.props.r}
//       />
//     );
//   }
// }
//
// Circle.propTypes = {
//   cx: PropTypes.number.isRequired,
//   cy: PropTypes.number.isRequired,
//   r: PropTypes.number.isRequired,
//
//   connectDragSource: PropTypes.func.isRequired,
//   isDragging: PropTypes.bool.isRequired,
//   id: PropTypes.any.isRequired,
//   left: PropTypes.number.isRequired,
//   top: PropTypes.number.isRequired,
//   hideSourceOnDrag: PropTypes.bool.isRequired,
// };
//
// export default Circle;


import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

const boxSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  }
};

@DragSource('BOX', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Box extends Component {

  render() {
    const { hideSourceOnDrag, left, top, connectDragSource, isDragging, children } = this.props;
    if (isDragging && hideSourceOnDrag) {
      return null;
    }

    return connectDragSource(
      <div style={{ ...style, left, top }}>
        {children}
      </div>
    );
  }
}

Box.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  id: PropTypes.any.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  hideSourceOnDrag: PropTypes.bool.isRequired,
  children: PropTypes.node
};
