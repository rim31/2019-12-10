import React, { Component } from 'react';
// var cors = require('cors')

const leboncoin = require('leboncoin-api');

// import PokemonAbibilities from './PokemonAbilities';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);// RECHERCHER button
    this.handleChange = this.handleChange.bind(this);// formulaire de recherche
    this.state = {
        data          : [],    
        region        :'',
        prixmin       :'',
        categorie     :'location',
        prixmax       :'',
        pieces        :'',
    };

  }

  handleChange(event) {
      const value = event.target.value;
      this.setState({
        ...this.state,
        [event.target.name]: value
    });
  }

  handleSubmit(event) {
    console.table('Le nom a été soumis : ' + this.state);
    event.preventDefault();
  }

      getResult() {
        var search = new leboncoin.Search()
        .setPage(1)
        .setQuery("renove")
        .setFilter(leboncoin.FILTERS.PARTICULIER)
        .setCategory("locations")
        .setRegion("ile_de_france")
        .addSearchExtra("price", {min: 1500, max: 2000}) // will add a range of price
        .addSearchExtra('furnished', ["1", "Non meublé"]); // will add enums for Meublé and Non meublé

        // problème de CORS
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Access-Control-Allow-Credentials', 'true');

      search.run().then(function (data) {
        console.log(data.page); // the current page
        console.log(data.nbResult); // the number of results for this search
        console.log(data.results); // the array of results
        data.results[0].getDetails().then(function (details) {
            console.log(details); // the item 0 with more data such as description, all images, author, ...
        }, function (err) {
            console.error(err);
        });
        data.results[0].getPhoneNumber().then(function (phoneNumer) {
            console.log(phoneNumer); // the phone number of the author if available
        }, function (err) {
            console.error(err); // if the phone number is not available or not parsable (image -> string) 
        });
      }, function (err) {
        console.error(err);
      }); 
          // test resultat car pb de cors
          return {position:{x:42, y:42}};
      }
      
        resarch() {
          let res = this.getResult();
          console.table(res);
          this.setState({resultats: res})
        }
      

  render() {

    return (
      <div className="formulaire" >
        <div>
        <form onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <input className="input is-danger"  name="Categorie" placeholder="Categorie" type="text" value={this.state.categorie} onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-danger"  name="region" placeholder="Région" type="text" value={this.state.region} onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-danger"  name="prixmin" placeholder="Prix min" type="number" value={this.state.prixmin} onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-danger"  name="prixmax" placeholder="Prix max" type="number" value={this.state.prixmax} onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-danger"  name="pieces" placeholder="Nb pièces" type="number" value={this.state.pieces} onChange={this.handleChange} />
          </div>
        </div>
          <input  className="button"  type="submit" value="Rechercher" />
        </form>
        </div>
            <button className="button" onClick={() => {this.resarch()}} variant="contained" color="primary">Search leboncoin</button> 
      </div>
    );
  }
}