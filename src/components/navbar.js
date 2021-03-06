import React from 'react';
import {
    Link
  } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {    
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href={null}>Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href={null}><Link to="/public">Public Page</Link> <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={null}><Link to="/protected">Protected Page</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={null}></a>
                </li>
                </ul>
            </div>
        </nav>
    );
  }
}