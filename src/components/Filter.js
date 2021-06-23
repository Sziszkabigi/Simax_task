import { React } from "react";

const Checkbox = (props) => <input type="checkbox" {...props} />;

function Filter() {
  state = { checked: false };
  //handleCheckboxChange = (event) =>
  //this.setState({ checked: event.target.checked });

  return (
    <div className="filter-menu">
      <div className="filter-1">
        <h1>12</h1>
        <p>Siterep</p>
      </div>
      <div className="filter-item">
        <img src="./assets/simax_filter_euro.svg" alt="" />
        <ul>
          <li>
            <label>
              <Checkbox
                checked={this.state.checked}
                //onChange={this.handleCheckboxChange}
              />
              <span>Dragabb</span>
            </label>
          </li>
          <li>
            <label>
              <Checkbox
                checked={this.state.checked}
                //onChange={this.handleCheckboxChange}
              />
              <span>Olcsobb</span>
            </label>{" "}
          </li>
        </ul>
      </div>
      <div className="filter-item">
        <img src="./assets/simax_filter_hossz.svg" alt="" />
        <ul>
          <li>
            <label>
              <Checkbox
                checked={this.state.checked}
                //onChange={this.handleCheckboxChange}
              />
              <span>Hosszabb</span>
            </label>
          </li>
          <li>
            <label>
              <Checkbox
                checked={this.state.checked}
                //onChange={this.handleCheckboxChange}
              />
              <span>Rovidebb</span>
            </label>{" "}
          </li>
        </ul>
      </div>
      <div className="filter-item">
        <img src="./assets/simax_filter_magassag.svg" alt="" />
        <ul>
          <li>
            <label>
              <Checkbox
                checked={this.state.checked}
                //onChange={this.handleCheckboxChange}
              />
              <span>Magasabb</span>
            </label>
          </li>
          <li>
            <label>
              <Checkbox
                checked={this.state.checked}
                //onChange={this.handleCheckboxChange}
              />
              <span>Alacsonyabb</span>
            </label>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
