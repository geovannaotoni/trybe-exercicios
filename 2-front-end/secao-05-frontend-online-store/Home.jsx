import React, { Component } from 'react';

class Home extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    // const categories = await getCategories()
    this.setState({
      categories,
    }); 
  };

  render() {
    const { categories } = this.state;
    return (
      <div>
        <nav>
          <p>Categorias</p>
          {categories.map((category) => (
            <label htmlFor={category.id} data-testid="category" key={category.id} >
              <input
                type="radio"
                name="category"
                id={category.id}
                value={category.id}
              />
              {category.name}
            </label>
          ))}
        </nav>
      </div>
    )
  }
}

export default Home;