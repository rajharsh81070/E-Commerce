import React, { Component } from "react";
import { connect } from "react-redux";

import { loadCategories, setSelectedCategory } from "../store/categories";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.categoryItemUi = this.categoryItemUi.bind(this);
  }
  componentDidMount() {
    const { loadCategories } = this.props;
    loadCategories();
  }

  categoryItemUi(category) {
    const { selectCategory } = this.props;
    return (
      <div
        key={category.id}
        className="category-item"
        onClick={() => selectCategory(category.id)}
      >
        {category.name}
      </div>
    );
  }

  render() {
    const { categories } = this.props;
    console.log(categories);

    return (
      <div className="categories">{categories.map(this.categoryItemUi)}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCategories: () => {
      dispatch(loadCategories());
    },
    selectCategory: id => {
      dispatch(setSelectedCategory(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
