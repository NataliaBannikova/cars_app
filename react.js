function Car(props) {

  const classes = ['card']

  if (props.car.marked) {
	  classes.push('marked')
  }

  return (
    <div className={classes.join(' ')} onClick={props.onMark}>
      <div className="card-img">
        <img src={props.car.img} alt={props.car.name} />
      </div>
      <h3>{props.car.name}</h3>
      <p>{props.car.price} $</p>
    </div>
  );
}

/* const app = (
	<div className="app">
		<div className="list">
			<Car car={{name: 'BMW M2 Coupe', price: 20000, img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg'}} />
			<Car car={{ name: 'Audi TT', price: 15000, img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598' }} />
			<Car car={{ name: 'Rolls Royce', price: 50000, img: 'http://cdn-ds.com/stock/2017-Bentley-Continental-GT-V8-Coupe--Beverly-Hills-CA/seo/VAMP16966-SCBFT7ZA0HC061335/sz_108215/image-1.jpg' }} />
			<Car car={{ name: 'Mercedes amg coupe', price: 18000, img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2' }} />
		</div>
	</div>
) */

class App extends React.Component {

  state = {
    cars: [
      {
		marked: false,
        name: "BMW M2 Coupe",
        price: 20000,
        img:
          "https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg",
      },
      {
		marked: false,
        name: "Audi TT",
        price: 15000,
        img:
          "https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598",
      },
      {
		marked: false,
        name: "Rolls Royce",
        price: 50000,
        img:
          "http://cdn-ds.com/stock/2017-Bentley-Continental-GT-V8-Coupe--Beverly-Hills-CA/seo/VAMP16966-SCBFT7ZA0HC061335/sz_108215/image-1.jpg",
      },
      {
		marked: false,
        name: "Mercedes amg coupe",
        price: 18000,
        img:
          "https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2",
      },
	],
	visible: true,
	appTitle: 'Cars application'
  };

  handleMarked(name) {
	  const cars = this.state.cars.concat()

	  const car = cars.find(c => c.name === name)
	  car.marked = !car.marked

	  this.setState({ cars })
  }

  toggleHandler() {
	this.setState({visible: !this.state.visible})
  }

  renderCars() {
	  if (!this.state.visible) {
		return null
	  }


	return this.state.cars.map(car => {
		return (
		<Car
		car={car} 
		key={car.name + Math.random()}
		onMark={this.handleMarked.bind(this, car.name)}
		/>
		)
	})
  }

  titleChangeHandler (title) {
	  if (title.trim() === ''){
		  return
	  }
	  this.setState({
		  appTitle: title
	  })
  }

  render() {
	const style = {
		marginRight: 20
	}
    return (
      <div className="app">
		  <h1>{this.state.appTitle}</h1>
		  <button 
		  onClick={() => this.toggleHandler()}
		  style={style}
		  >Toggle</button>

		  <input
		  type="text"
		  placeholder="Change title"
		  onChange={(event) => this.titleChangeHandler(event.target.value)}
		  value={this.state.appTitle}
		  />
		  <hr/>

        <div className="list">
			{this.renderCars()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
