import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  value: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  actionType: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
};

const defaultProps = {
  value: '',
};


class Modal extends React.Component {
  handleRemove = () => {
    this.props.onRemove();
  }

  handleSave = () => {
    const { value } = '';
    this.props.onSave({
      value,
    });
  }

  renderText() {
    const {
      start,
      end,
    } = this.props;

    if (start.isSame(end, 'day')) {
      return (<span>{`${start.format('MMM Do., HH:mm')} - ${end.format('HH:mm')}`}</span>);
    }
    return (<span>{`${start.format('MMM Do.')} - ${end.format('Do MMM.')}, ${start.format('HH:mm')} - ${end.format('HH:mm')}`}</span>);
  }

  render() {
    const {
      value,
    } = this.props;
    return (
      <div class="customModal">
        <div className="customModal__text">{this.renderText()}</div>
        <button className="customModal__button buttons" type="button" onClick={this.handleRemove}>Delete</button>
        <button className="customModal__button customModal__button_float_right buttons" type="button" onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;
