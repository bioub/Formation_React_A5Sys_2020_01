import css from './Select.module.css';
import React, { Component } from 'react';

export class Select extends Component {
  state = {
    opened: false,
  };

  handleClickSelected = () => {
    this.setState({
      opened: true,
    })
  }

  render() {
    const { value = '', items = [], onSelect = () => {} } = this.props;
    return (
      <div className={css.Select}>
        <div className={css.Selected} onClick={this.handleClickSelected}>{value}</div>
        {this.state.opened && (
          <div className={css.Items}>
            {items.map((it) => (
              <div className={css.Item} key={it} onClick={() => onSelect(it)}>
                {it}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
